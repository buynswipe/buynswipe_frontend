import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const types = new Set(["blog", "page", "resource"])
const statuses = new Set(["draft", "in_review", "published", "archived"])

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Authentication required" }, { status: 401 })
  const { data: staff } = await supabase.from("admin_users").select("role, is_active").eq("user_id", user.id).maybeSingle()
  if (!staff?.is_active || !["owner", "admin", "editor"].includes(staff.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 })

  const body = await request.json().catch(() => null)
  const title = typeof body?.title === "string" ? body.title.trim() : ""
  const slug = typeof body?.slug === "string" ? body.slug.trim().toLowerCase() : ""
  const documentType = typeof body?.documentType === "string" ? body.documentType : "blog"
  const status = typeof body?.status === "string" ? body.status : "draft"
  const excerpt = typeof body?.excerpt === "string" ? body.excerpt.trim() : null
  if (title.length < 3 || title.length > 180 || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || !types.has(documentType) || !statuses.has(status)) {
    return NextResponse.json({ error: "Invalid content fields" }, { status: 400 })
  }

  const { data, error } = await supabase.from("cms_documents").insert({ title, slug, document_type: documentType, status, excerpt, author_id: user.id }).select("id, slug, title, document_type, status, created_at").single()
  if (error) return NextResponse.json({ error: error.code === "23505" ? "Slug already exists" : "Unable to create content" }, { status: error.code === "23505" ? 409 : 500 })
  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: "content.created", entity_type: "cms_document", entity_id: data.id, metadata: { document_type: documentType, slug } })
  return NextResponse.json({ data }, { status: 201 })
}
