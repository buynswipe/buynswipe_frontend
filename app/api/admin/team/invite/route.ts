import { NextResponse } from "next/server"
import { z } from "zod"
import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"

const inviteSchema = z.object({
  email: z.string().trim().email().max(320),
  displayName: z.string().trim().min(1).max(120),
  role: z.enum(["admin", "editor", "viewer"]),
})

export async function POST(request: Request) {
  const authClient = await createClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const supabase = createAdminClient()
  const { data: actor } = await supabase
    .from("admin_users")
    .select("role")
    .eq("user_id", user.id)
    .eq("is_active", true)
    .maybeSingle()

  if (!actor || !["owner", "admin"].includes(actor.role)) {
    return NextResponse.json({ error: "Only owners and admins can invite team members." }, { status: 403 })
  }

  const parsed = inviteSchema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ error: "Enter a valid name, email, and role." }, { status: 400 })

  const { email, displayName, role } = parsed.data
  const { data: invitation, error: inviteError } = await supabase.auth.admin.inviteUserByEmail(email)
  if (inviteError || !invitation.user) {
    return NextResponse.json({ error: inviteError?.message || "Unable to send invitation." }, { status: 400 })
  }

  const { error: memberError } = await supabase.from("admin_users").upsert({
    user_id: invitation.user.id,
    display_name: displayName,
    role,
    is_active: true,
  }, { onConflict: "user_id" })

  if (memberError) {
    await supabase.auth.admin.deleteUser(invitation.user.id)
    return NextResponse.json({ error: "Invitation could not be assigned to the team." }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
