# KarirGPS Overhaul Tasks

## Wave 1: Knowledge Infrastructure
- [x] Create `lib/knowledge/brand-voice.ts`
- [x] Create `lib/knowledge/style-guide.ts`
- [x] Create `lib/knowledge/combination-tables.ts`
- [x] Create `lib/knowledge/anxiety-framework.ts`

## Wave 2: Prompts, Types & Schemas
- [x] Rewrite `lib/prompts/free-report.ts`
- [x] Create `lib/prompts/premium-report-v3.ts`
- [x] Create `lib/prompts/parent-report.ts`
- [x] Update `types/index.ts`
- [x] Update `lib/schemas.ts`

## Wave 3: AI Engine & API Routes
- [x] Update `lib/laporan.ts` to build context using the new knowledge base
- [x] Update `lib/laporan.ts` to implement `generateParentReport`
- [x] Rewrite `app/api/laporan-gratis/route.ts`
- [x] Rewrite `app/api/laporan/generate-premium/route.ts` to handle both V3 and Parent Report
- [x] Update `lib/email.ts` to support rendering V3 format

## Wave 4: Frontend UI
- [x] Create `components/hasil/PremiumReportV3Renderer.tsx`
- [x] Create `components/hasil/ParentReportRenderer.tsx`
- [x] Update `components/hasil/LaporanLengkap.tsx` to handle V3 and fallback to old ones
- [x] Update `app/laporan/[id]/page.tsx` to render the Parent Report tab
- [x] Update `app/hasil/page.tsx` to handle FreeReportV2 format
- [x] Update `app/hasil/page.tsx` to render the Parent Report tab
- [x] Update `app/api/bayar/route.ts`, `app/laporan/[id]/page.tsx`, and `app/hasil/page.tsx` to reflect new Rp 99.000 pricing
