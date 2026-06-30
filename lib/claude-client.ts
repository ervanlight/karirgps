import Anthropic from '@anthropic-ai/sdk'

// Dukung banyak key dipisah koma (ANTHROPIC_API_KEYS) untuk rotasi, sama seperti
// pola lama Gemini -- fallback ke satu key (ANTHROPIC_API_KEY) kalau cuma satu.
const apiKeys = (process.env.ANTHROPIC_API_KEYS || process.env.ANTHROPIC_API_KEY || '')
  .split(',')
  .map((k) => k.trim())
  .filter(Boolean)

export function getClaudeClient(): Anthropic {
  const randomKey = apiKeys[Math.floor(Math.random() * apiKeys.length)]
  return new Anthropic({ apiKey: randomKey })
}

// Sonnet 4.6 -- bukan Opus. Tugas kita (laporan JSON terstruktur dari profil
// psikometri) tidak butuh reasoning kelas Opus; Sonnet jauh lebih murah
// (3/15 USD per 1M token vs 5/25 Opus) dengan kualitas yang untuk task ini
// hampir tidak berbeda. Lihat lib/prompts/README.md untuk rincian biaya.
export const CLAUDE_MODEL = 'claude-sonnet-4-6'

// SENGAJA tidak mengisi parameter `thinking` sama sekali (tanpa extended
// thinking). Laporan kita adalah output JSON terstruktur dari data yang
// sudah dikurasi (grounding DB + anxiety framework) -- bukan soal reasoning
// panjang. Extended thinking cuma menambah token output (dan biaya) tanpa
// menaikkan kualitas untuk task seperti ini.

// Ekstrak teks dari text block pertama di response Claude, buang markdown
// fence ```json ... ``` kalau model membungkusnya begitu meski sudah diminta
// JSON murni.
export function extractJsonText(message: Anthropic.Message): string {
  const block = message.content.find((b): b is Anthropic.TextBlock => b.type === 'text')
  if (!block) throw new Error('Tidak ada text block di response Claude')
  return block.text.replace(/^```json\n?/, '').replace(/```$/, '').trim()
}
