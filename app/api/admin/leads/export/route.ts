import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { data: staff } = await supabase.from("admin_users").select("role").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  if (!staff) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const { data, error } = await supabase.from("contact_submissions").select("name,email,phone,subject,message,source,status,created_at").order("created_at", { ascending: false }).limit(5000)
  if (error) return NextResponse.json({ error: "Unable to export leads" }, { status: 500 })
  const headers = ["name", "email", "phone", "subject", "message", "source", "status", "created_at"]
  const csv = [headers, ...(data ?? []).map((row) => headers.map((key) => JSON.stringify(String(row[key as keyof typeof row] ?? ""))))].map((row) => row.join(",")).join("\n")
  return new NextResponse(csv, { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": "attachment; filename=buynswipe-leads.csv" } })
}
