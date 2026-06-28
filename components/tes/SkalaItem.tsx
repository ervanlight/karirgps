'use client'

interface SkalaItemProps {
  id: string
  pernyataan: string
  nilai: number | null
  onSelect: (id: string, nilai: number) => void
}

export default function SkalaItem({ id, pernyataan, nilai, onSelect }: SkalaItemProps) {
  return (
    <div style={{
      background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)',
      borderRadius: 10, padding: '16px 18px', marginBottom: 12,
    }}>
      <div style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.65, marginBottom: 14 }}>
        "{pernyataan}"
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#888780', marginBottom: 7 }}>
        <span>Sangat tidak setuju</span>
        <span>Sangat setuju</span>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => onSelect(id, n)}
            style={{
              flex: 1, height: 44, border: `0.5px solid ${nilai === n ? '#1D9E75' : 'rgba(44,44,42,0.15)'}`,
              borderRadius: 7, fontSize: 13, fontWeight: 500,
              background: nilai === n ? '#1D9E75' : '#fff',
              color: nilai === n ? '#fff' : '#888780',
              cursor: 'pointer', transition: 'all 0.12s',
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  )
}
