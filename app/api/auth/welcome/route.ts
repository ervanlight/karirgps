import { NextRequest, NextResponse } from 'next/server'
import { kirimWelcome } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: 'Email diperlukan' }, { status: 400 })
    }

    // Fire and forget welcome email
    await kirimWelcome(email)

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error('Welcome email error:', error)
    return NextResponse.json({ error: 'Gagal mengirim welcome email' }, { status: 500 })
  }
}
