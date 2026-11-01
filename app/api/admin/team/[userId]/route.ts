import { NextResponse } from "next/server"
import { z } from "zod"
import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"

const updateSchema = z.object({
  role: z.enum(["admin", "editor", "viewer"]).optional(),
  isActive: z.boolean().optional(),
}).refine((value) => value.role !== undefined || value.isActive !== undefined)

export async function PATCH(request: Request, { params }: { params: Promise<{ userId: string }> }) {
  const authClient = await createClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { userId } = await params
  if (userId === user.id) return NextResponse.json({ error: "You cannot change your own access." }, { status: 400 })

  const parsed = updateSchema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ error: "Choose a valid role or active status." }, { status: 400 })

  const supabase = createAdminClient()
  const { data: actor } = await supabase.from("admin_users").select("role").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  if (!actor || !["owner", "admin"].includes(actor.role)) return NextResponse.json({ error: "Only owners and admins can manage team members." }, { status: 403 })

  const { data: target } = await supabase.from("admin_users").select("role").eq("user_id", userId).maybeSingle()
  if (!target) return NextResponse.json({ error: "Team member not found." }, { status: 404 })
  if (target.role === "owner") return NextResponse.json({ error: "The owner account cannot be changed here." }, { status: 403 })
  if (actor.role !== "owner" && parsed.data.role === "admin") return NextResponse.json({ error: "Only the owner can assign admin access." }, { status: 403 })

  const update = {
    ...(parsed.data.role ? { role: parsed.data.role } : {}),
    ...(parsed.data.isActive !== undefined ? { is_active: parsed.data.isActive } : {}),
  }
  const { error } = await supabase.from("admin_users").update(update).eq("user_id", userId)
  if (error) return NextResponse.json({ error: "Unable to update team member." }, { status: 500 })
  return NextResponse.json({ ok: true })
}
