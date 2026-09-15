import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(_: Request, { params }: { params: Promise<{ id: string; revisionId: string }> }) {
  const { id, revisionId } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Authentication required" }, { status: 401 })
  const { data: staff } = await supabase.from("admin_users").select("role, is_active").eq("user_id", user.id).maybeSingle()
  if (!staff?.is_active || !["owner", "admin", "editor"].includes(staff.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  if (!/^[0-9a-f-]{36}$/i.test(id) || !/^[0-9a-f-]{36}$/i.test(revisionId)) return NextResponse.json({ error: "Invalid revision" }, { status: 400 })
  const { data: revision } = await supabase.from("content_revisions").select("title, excerpt, content, seo_title, seo_description").eq("id", revisionId).eq("content_id", id).maybeSingle()
  if (!revision) return NextResponse.json({ error: "Revision not found" }, { status: 404 })
  const { data, error } = await supabase.from("cms_documents").update({ title: revision.title, excerpt: revision.excerpt, content: revision.content, seo_title: revision.seo_title, seo_description: revision.seo_description, status: "draft", scheduled_at: null, published_at: null, updated_at: new Date().toISOString() }).eq("id", id).select("id, title, status, updated_at").single()
  if (error) return NextResponse.json({ error: "Unable to restore revision" }, { status: 500 })
  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: "content.revision_restored", entity_type: "cms_document", entity_id: id, metadata: { revision_id: revisionId } })
  return NextResponse.json({ data })
}
