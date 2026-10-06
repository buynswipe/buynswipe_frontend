import { NextRequest } from "next/server"
import { updateSession } from "@/lib/supabase/proxy"

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-next-pathname", request.nextUrl.pathname)
  const requestWithPath = new NextRequest(request, { headers: requestHeaders })
  return updateSession(requestWithPath)
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"],
}
