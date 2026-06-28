import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// ============================================================
// Server-side (Route Handler) Supabase client — cookie-aware,
// dipakai untuk verifikasi user login di API routes (BUKAN admin/service-role).
// ============================================================
export function createRouteClient() {
  const cookieStore = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll() {
          // Route handlers ini hanya dipakai untuk membaca sesi user yang sudah
          // login (auth.getUser) -- tidak perlu menulis cookie baru di sini.
        },
      },
    }
  )
}

export async function getAuthenticatedUser() {
  const supabase = createRouteClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
