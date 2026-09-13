import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const editableRoles = ["owner", "admin", "editor"]

async function getEditor() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { supabase, user: null, staff: null }
  const { data: staff } = await supabase.from("admin_users").select("role, is_active").eq("user_id", user.id).maybeSingle()
  return { supabase, user, staff }
}

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { supabase, user, staff } = await getEditor()
  if (!user) return NextResponse.json({ error: "Authentication required" }, { status: 401 })
  if (!staff?.is_active || !editableRoles.includes(staff.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const { data, error } = await supabase.from("content_revisions").select("id, title, excerpt, content, seo_title, seo_description, status, author_id, created_at").eq("content_id", id).order("created_at", { ascending: false })
  if (error) return NextResponse.json({ error: "Unable to load revisions" }, { status: 500 })
  return NextResponse.json({ data })
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { supabase, user, staff } = await getEditor()
  if (!user) return NextResponse.json({ error: "Authentication required" }, { status: 401 })
  if (!staff?.is_active || !editableRoles.includes(staff.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const body = await request.json().catch(() => null)
  const title = typeof body?.title === "string" ? body.title.trim() : ""
  const excerpt = typeof body?.excerpt === "string" ? body.excerpt.trim() : ""
  const content = typeof body?.content === "string" ? body.content.trim() : ""
  const status = body?.status === "review" || body?.status === "draft" ? body.status : "draft"
  const seoTitle = typeof body?.seoTitle === "string" ? body.seoTitle.trim() : null
  const seoDescription = typeof body?.seoDescription === "string" ? body.seoDescription.trim() : null
  if (!/^[0-9a-f-]{36}$/i.test(id) || title.length < 3 || title.length > 180 || content.length > 50000) return NextResponse.json({ error: "Invalid revision fields" }, { status: 400 })
  const { data, error } = await supabase.from("content_revisions").insert({ content_id: id, author_id: user.id, title, excerpt, content, seo_title: seoTitle, seo_description: seoDescription, status }).select("id, status, created_at").single()
  if (error) return NextResponse.json({ error: "Unable to create revision" }, { status: 500 })
  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: "content.revision_created", entity_type: "cms_document", entity_id: id, metadata: { revision_id: data.id, status } })
  return NextResponse.json({ data }, { status: 201 })
}
