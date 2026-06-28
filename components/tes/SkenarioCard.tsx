'use client'

interface Opsi {
  teks: string
  kode: string
}

interface SkenarioCardProps {
  nomor: number
  pertanyaan: string
  konteks?: string
  opsi: Opsi[]
  selected: string | null
  onSelect: (kode: string) => void
  soalId: string
}

export default function SkenarioCard({
  nomor, pertanyaan, konteks, opsi, selected, onSelect,
}: SkenarioCardProps) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{
        fontSize: 11, fontWeight: 500, color: '#888780',
        textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 8,
      }}>
        Skenario {nomor}
      </div>
      <div style={{ fontSize: 15, fontWeight: 500, color: '#2C2C2A', marginBottom: 4, lineHeight: 1.5 }}>
        {pertanyaan}
      </div>
      {konteks && (
        <div style={{ fontSize: 13, color: '#888780', marginBottom: 14, lineHeight: 1.6, fontStyle: 'italic' }}>
          {konteks}
        </div>
      )}
      <div style={{ display: 'grid', gap: 8 }}>
        {opsi.map((o) => (
          <button
            key={o.kode}
            onClick={() => onSelect(o.kode)}
            style={{
              width: '100%', textAlign: 'left',
              background: selected === o.kode ? '#E1F5EE' : '#fff',
              border: `0.5px solid ${selected === o.kode ? '#1D9E75' : 'rgba(44,44,42,0.12)'}`,
              borderRadius: 10, padding: '14px 16px',
              fontSize: 14, color: selected === o.kode ? '#0F6E56' : '#2C2C2A',
              lineHeight: 1.65, cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {selected === o.kode && (
              <span style={{ color: '#1D9E75', fontWeight: 600, marginRight: 6 }}>✓</span>
            )}
            {o.teks}
          </button>
        ))}
      </div>
    </div>
  )
}
