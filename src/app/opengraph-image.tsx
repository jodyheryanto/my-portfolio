import { ImageResponse } from 'next/server';

export const runtime = 'edge';
export const alt = 'Jody — IT & AI Consultant, Applied AI & MLOps Researcher, BNSP Trainer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const pillars = [
  { label: 'IT & AI Consulting', color: '#7ee787' },
  { label: 'Applied AI & MLOps Research', color: '#939aff' },
  { label: 'BNSP Trainer & Assessor', color: '#ffa28b' },
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#1E2336',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, color: '#9ca3af' }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#22c55e' }} />
          Open for collaboration · jody.my.id
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>Jody</div>
          <div style={{ fontSize: 40, color: '#dbeafe', lineHeight: 1.25, maxWidth: 1000 }}>I work where AI meets real infrastructure, and I teach others to do the same.</div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {pillars.map((p) => (
            <div
              key={p.label}
              style={{ display: 'flex', padding: '12px 22px', borderRadius: 999, border: `2px solid ${p.color}`, color: p.color, fontSize: 26, fontWeight: 600 }}
            >
              {p.label}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
