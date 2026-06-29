import { GoogleGenAI } from '@google/genai'
import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY! // Butuh service role untuk RLS by-pass

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

async function chunkText(text: string, maxTokens: number = 500): Promise<string[]> {
  // Simple chunking by heading or double newline
  // Untuk produksi, gunakan library seperti langchain/text-splitter
  const rawChunks = text.split(/\n## |\n\n/)
  const chunks: string[] = []
  
  let currentChunk = ''
  for (const rc of rawChunks) {
    if ((currentChunk.length + rc.length) > maxTokens * 4) { // Estimasi kasarnya 1 token = 4 char
      if (currentChunk.trim()) chunks.push(currentChunk.trim())
      currentChunk = rc
    } else {
      currentChunk += '\n\n' + rc
    }
  }
  if (currentChunk.trim()) chunks.push(currentChunk.trim())
  
  return chunks.filter(c => c.length > 50) // Abaikan chunk yang terlalu pendek
}

async function processFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const fileName = path.basename(filePath)
  
  console.log(`\n📄 Memproses file: ${fileName}`)
  
  // 1. Bersihkan chunk lama dari file ini agar tidak duplikat
  console.log('Menghapus data lama...')
  await supabase.from('knowledge_chunks').delete().eq('source_file', fileName)

  // 2. Potong-potong dokumen
  const chunks = await chunkText(content)
  console.log(`Ditemukan ${chunks.length} potongan teks.`)

  // 3. Embedding & Insert
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i]
    try {
      console.log(`[${i+1}/${chunks.length}] Membuat vektor embedding...`)
      const response = await ai.models.embedContent({
        model: 'gemini-embedding-2',
        contents: chunk,
      })
      
      const embedding = response.embeddings?.[0]?.values
      if (!embedding) throw new Error('Gagal mendapatkan vektor dari Gemini')

      const { error } = await supabase.from('knowledge_chunks').insert({
        source_file: fileName,
        content: chunk,
        embedding: embedding
      })

      if (error) throw error

    } catch (err) {
      console.error(`❌ Gagal memproses chunk ${i+1}:`, err)
    }
  }
  
  console.log(`✅ File ${fileName} berhasil disinkronisasi ke Vector Database.`)
}

async function main() {
  const knowledgeDir = path.resolve(process.cwd(), 'assets/knowledge/graph') // Folder contoh
  
  if (!fs.existsSync(knowledgeDir)) {
    console.warn(`Folder ${knowledgeDir} tidak ditemukan. Silakan sesuaikan path dokumenmu.`)
    // Fallback: mencoba mencari file .md di root atau folder spesifik lainnya
    const rootFiles = fs.readdirSync(process.cwd()).filter(f => f.endsWith('.md'))
    if (rootFiles.length === 0) return console.log('Tidak ada file markdown untuk diproses.')
    
    for (const file of rootFiles) {
       await processFile(path.resolve(process.cwd(), file))
    }
    return
  }

  const files = fs.readdirSync(knowledgeDir).filter(f => f.endsWith('.md'))
  
  for (const file of files) {
    const fullPath = path.resolve(knowledgeDir, file)
    await processFile(fullPath)
  }
}

main().catch(console.error)
