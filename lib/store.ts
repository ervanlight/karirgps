'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {
  TesSession, RiasecCode, MICode, WorkValueCode,
  KonteksPersonal, RiasecScores, MIScores, WorkValueScores,
} from '@/types'
import { hitungRiasec, hitungMI, hitungWorkValues } from './scoring'

// Default empty scores
const emptyRiasec: RiasecScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 }
const emptyMI: MIScores = { L: 0, LM: 0, SP: 0, MU: 0, BK: 0, N: 0, IP: 0, IA: 0 }
const emptyWV: WorkValueScores = { ST: 0, DA: 0, OT: 0, KR: 0, KM: 0, FL: 0 }

interface TesStore extends TesSession {
  // D1 actions
  setD1Skenario: (id: string, kode: RiasecCode) => void
  setD1Skala: (id: string, nilai: number) => void

  // D2 actions
  setD2Skenario: (id: string, kode: MICode) => void
  setD2Skala: (id: string, nilai: number) => void

  // D3 actions
  setD3Tradeoff: (id: string, kode: WorkValueCode) => void
  setD3Skala: (id: string, nilai: number) => void

  // D4 actions
  setD4: (key: keyof KonteksPersonal, nilai: string | string[]) => void

  // Compute & navigate
  hitungSemua: () => void
  setStep: (step: TesSession['current_step']) => void
  setSessionId: (id: string) => void
  reset: () => void
}

// ============================================================
// Mencegah jawaban tes "bocor" antar akun di perangkat yang sama
// (mis. komputer keluarga/sekolah dipakai bergantian). Store ini
// persist ke localStorage tanpa terikat user — kalau user yang login
// beda dari yang terakhir kali pakai perangkat ini, reset dulu supaya
// akun baru tidak mewarisi jawaban orang lain.
// ============================================================
const LAST_UID_KEY = 'karirgps-last-uid'

export function ensureFreshSessionForUser(userId: string) {
  if (typeof window === 'undefined') return
  const lastUid = window.localStorage.getItem(LAST_UID_KEY)
  if (lastUid !== userId) {
    useTesStore.getState().reset()
    window.localStorage.setItem(LAST_UID_KEY, userId)
  }
}

const initialState: TesSession = {
  d1_skenario: {},
  d1_skala: {},
  d2_skenario: {},
  d2_skala: {},
  d3_tradeoff: {},
  d3_skala: {},
  d4_konteks: {},

  riasec_scores: emptyRiasec,
  mi_scores: emptyMI,
  wv_scores: emptyWV,

  holland_code: [],
  mi_profile: [],
  wv_profile: [],

  current_step: 'd1',
  session_id: null,
}

export const useTesStore = create<TesStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      setD1Skenario: (id, kode) =>
        set((s) => {
          const d1_skenario = { ...s.d1_skenario, [id]: kode }
          const riasec_scores = hitungRiasec(d1_skenario, s.d1_skala)
          return { d1_skenario, riasec_scores }
        }),

      setD1Skala: (id, nilai) =>
        set((s) => {
          const d1_skala = { ...s.d1_skala, [id]: nilai }
          const riasec_scores = hitungRiasec(s.d1_skenario, d1_skala)
          return { d1_skala, riasec_scores }
        }),

      setD2Skenario: (id, kode) =>
        set((s) => {
          const d2_skenario = { ...s.d2_skenario, [id]: kode }
          const mi_scores = hitungMI(d2_skenario, s.d2_skala)
          return { d2_skenario, mi_scores }
        }),

      setD2Skala: (id, nilai) =>
        set((s) => {
          const d2_skala = { ...s.d2_skala, [id]: nilai }
          const mi_scores = hitungMI(s.d2_skenario, d2_skala)
          return { d2_skala, mi_scores }
        }),

      setD3Tradeoff: (id, kode) =>
        set((s) => {
          const d3_tradeoff = { ...s.d3_tradeoff, [id]: kode }
          const wv_scores = hitungWorkValues(d3_tradeoff, s.d3_skala)
          return { d3_tradeoff, wv_scores }
        }),

      setD3Skala: (id, nilai) =>
        set((s) => {
          const d3_skala = { ...s.d3_skala, [id]: nilai }
          const wv_scores = hitungWorkValues(s.d3_tradeoff, d3_skala)
          return { d3_skala, wv_scores }
        }),

      setD4: (key, nilai) =>
        set((s) => ({
          d4_konteks: { ...s.d4_konteks, [key]: nilai },
        })),

      hitungSemua: () => {
        const s = get()
        const riasec_scores = hitungRiasec(s.d1_skenario, s.d1_skala)
        const mi_scores = hitungMI(s.d2_skenario, s.d2_skala)
        const wv_scores = hitungWorkValues(s.d3_tradeoff, s.d3_skala)

        // Sort and take top
        const sortTop = <T extends string>(sc: Record<T, number>, n: number): T[] =>
          (Object.entries(sc) as [T, number][])
            .sort((a, b) => b[1] - a[1])
            .slice(0, n)
            .map(([k]) => k)

        set({
          riasec_scores,
          mi_scores,
          wv_scores,
          holland_code: sortTop<RiasecCode>(riasec_scores, 3),
          mi_profile: sortTop<MICode>(mi_scores, 3),
          wv_profile: sortTop<WorkValueCode>(wv_scores, 2),
        })
      },

      setStep: (step) => set({ current_step: step }),

      setSessionId: (id) => set({ session_id: id }),

      reset: () => set(initialState),
    }),
    {
      name: 'karirgps-tes-session',
      // Only persist jawaban, not computed scores (computed on hydration)
      partialize: (s) => ({
        d1_skenario: s.d1_skenario, d1_skala: s.d1_skala,
        d2_skenario: s.d2_skenario, d2_skala: s.d2_skala,
        d3_tradeoff: s.d3_tradeoff, d3_skala: s.d3_skala,
        d4_konteks: s.d4_konteks,
        current_step: s.current_step,
        session_id: s.session_id,
      }),
    }
  )
)
