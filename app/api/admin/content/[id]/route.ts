import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const statuses = new Set(["draft", "in_review", "published", "archived"])

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Authentication required" }, { status: 401 })
  const { data: staff } = await supabase.from("admin_users").select("role, is_active").eq("user_id", user.id).maybeSingle()
  if (!staff?.is_active || !["owner", "admin", "editor"].includes(staff.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 })

  const body = await request.json().catch(() => null)
  const title = typeof body?.title === "string" ? body.title.trim() : ""
  const excerpt = typeof body?.excerpt === "string" ? body.excerpt.trim() : null
  const content = typeof body?.content === "string" ? body.content.trim() : ""
  const status = typeof body?.status === "string" ? body.status : "draft"
  const seoTitle = typeof body?.seoTitle === "string" ? body.seoTitle.trim() : null
  const seoDescription = typeof body?.seoDescription === "string" ? body.seoDescription.trim() : null
  if (title.length < 3 || title.length > 180 || content.length > 50000 || !statuses.has(status)) return NextResponse.json({ error: "Invalid content fields" }, { status: 400 })

  const { data, error } = await supabase.from("cms_documents").update({ title, excerpt, content, status, seo_title: seoTitle, seo_description: seoDescription, published_at: status === "published" ? new Date().toISOString() : null, updated_at: new Date().toISOString() }).eq("id", id).select("id, slug, title, document_type, status, updated_at").single()
  if (error) return NextResponse.json({ error: "Unable to update content" }, { status: 500 })
  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: "content.updated", entity_type: "cms_document", entity_id: id, metadata: { status } })
  return NextResponse.json({ data })
}
