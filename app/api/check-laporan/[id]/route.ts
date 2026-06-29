import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export const dynamic = 'force-dynamic' // Disable caching

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const sessionId = params.id

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })
    }

    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('reports')
      .select('payment_status, laporan_siswa')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    if (error) {
      console.error('Error fetching report:', error)
      return NextResponse.json({ error: 'Failed to fetch report' }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Check laporan error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
