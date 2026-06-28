#!/bin/bash
# ============================================================
# KarirGPS — DEPLOY SCRIPT
# Jalankan sekali setelah setup credentials
# ============================================================

echo "🚀 KarirGPS Deploy Script"
echo "========================="

# Step 1: Cek prerequisites
echo ""
echo "1️⃣  Cek prerequisites..."
command -v node >/dev/null 2>&1 || { echo "❌ Node.js tidak ditemukan. Install dari nodejs.org"; exit 1; }
command -v npm >/dev/null 2>&1  || { echo "❌ npm tidak ditemukan"; exit 1; }
echo "✅ Node.js $(node -v)"
echo "✅ npm $(npm -v)"

# Step 2: Install dependencies
echo ""
echo "2️⃣  Install dependencies..."
npm install
echo "✅ Dependencies installed"

# Step 3: Cek .env.local
echo ""
echo "3️⃣  Cek environment variables..."
if [ ! -f ".env.local" ]; then
  echo "❌ .env.local tidak ditemukan"
  echo "   Jalankan: cp .env.example .env.local"
  echo "   Lalu isi semua variabelnya"
  exit 1
fi

required_vars=("NEXT_PUBLIC_SUPABASE_URL" "NEXT_PUBLIC_SUPABASE_ANON_KEY" "ANTHROPIC_API_KEY" "MIDTRANS_SERVER_KEY" "MIDTRANS_CLIENT_KEY")
missing_vars=()
for var in "${required_vars[@]}"; do
  if ! grep -q "^${var}=" .env.local 2>/dev/null || grep -q "^${var}=your" .env.local 2>/dev/null; then
    missing_vars+=("$var")
  fi
done

if [ ${#missing_vars[@]} -gt 0 ]; then
  echo "❌ Variabel belum diisi di .env.local:"
  for v in "${missing_vars[@]}"; do echo "   - $v"; done
  exit 1
fi
echo "✅ Semua environment variables tersedia"

# Step 4: Build test
echo ""
echo "4️⃣  Build test..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build gagal. Fix error di atas dulu."
  exit 1
fi
echo "✅ Build berhasil"

echo ""
echo "✅ SEMUA SIAP! Pilih cara deploy:"
echo ""
echo "   A) Vercel (recommended):"
echo "      npx vercel --prod"
echo ""
echo "   B) Manual upload ke Vercel dashboard:"
echo "      https://vercel.com/new"
echo ""
