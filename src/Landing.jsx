import { Link } from 'react-router-dom';

/* ─── DESIGN TOKENS ────────────────────────────────────────────────────────── */
const C = {
  bg:        '#0a0a0a',
  surface:   '#111111',
  border:    '#1f1f1f',
  borderMid: '#333333',
  text:      '#e5e5e5',
  muted:     '#888888',
  faint:     '#444444',
  accent1:   '#5b8dee',
  accent2:   '#a855f7',
};

/* ─── KEYFRAME INJECTION ────────────────────────────────────────────────────── */
const injectKeyframes = () => {
  if (document.getElementById('tutly-kf')) return;
  const s = document.createElement('style');
  s.id = 'tutly-kf';
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: ${C.bg}; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes glowPulse {
      0%, 100% { opacity: .35; }
      50%       { opacity: .65; }
    }
    @keyframes gridLine {
      from { background-position: 0 0; }
      to   { background-position: 40px 40px; }
    }
    .hero-anim  { animation: fadeUp .75s cubic-bezier(.22,1,.36,1) both; }
    .hero-anim2 { animation: fadeUp .75s .15s cubic-bezier(.22,1,.36,1) both; }
    .hero-anim3 { animation: fadeUp .75s .30s cubic-bezier(.22,1,.36,1) both; }

    .stat-card:hover  { border-color: ${C.accent1} !important; transform: translateY(-3px); }
    .step-card:hover  { border-color: ${C.accent1} !important; background: #161622 !important; }
    .cta-btn:hover    { opacity: .88; transform: translateY(-2px); box-shadow: 0 12px 40px rgba(91,141,238,.45) !important; }
    .footer-link:hover { color: ${C.accent1} !important; }

    .stat-card, .step-card, .cta-btn, .footer-link { transition: all .22s ease; }

    /* Responsive grid */
    @media (max-width: 680px) {
      .steps-grid { grid-template-columns: 1fr !important; }
      .stats-grid { grid-template-columns: 1fr !important; }
      .hero-title { font-size: 3rem !important; }
    }
  `;
  document.head.appendChild(s);
};

/* ─── DATA ──────────────────────────────────────────────────────────────────── */
const STEPS = [
  {
    n: '01',
    title: 'Sube tu duda',
    desc:  'Escribe, graba un audio o adjunta una foto de lo que no entiendes. Sin límites de formato.',
    icon:  '📤',
  },
  {
    n: '02',
    title: 'Recibe ayuda',
    desc:  'Un tutor especializado responde de forma asincrónica cuando mejor le convenga a tu ritmo.',
    icon:  '💡',
  },
  {
    n: '03',
    title: 'Avanza',
    desc:  'Retoma tu tarea con la orientación exacta que necesitabas. Sin frustraciones, sin copiar.',
    icon:  '🚀',
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────────── */
export default function Landing() {
  injectKeyframes();

  return (
    <div style={{ backgroundColor: C.bg, color: C.text, minHeight: '100vh', fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(20px, 5vw, 80px)',
        height: '64px',
        background: 'rgba(10,10,10,.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '.08em',
          background: `linear-gradient(135deg, ${C.accent1}, ${C.accent2})`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          TUTLY
        </span>
        <Link to="/login" style={{
          padding: '8px 22px', borderRadius: '8px',
          border: `1px solid ${C.borderMid}`, color: C.text,
          textDecoration: 'none', fontSize: '.875rem', fontWeight: 500,
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent1; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderMid; }}>
          Iniciar sesión
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: 'clamp(80px, 12vw, 140px) clamp(20px, 5vw, 80px)',
        textAlign: 'center',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          background: `radial-gradient(circle, rgba(91,141,238,.18) 0%, transparent 70%)`,
          animation: 'glowPulse 5s ease-in-out infinite', pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div className="hero-anim" style={{
          display: 'inline-block', marginBottom: '28px',
          padding: '6px 18px', borderRadius: '50px',
          border: `1px solid ${C.borderMid}`,
          fontSize: '.8rem', fontWeight: 600, letterSpacing: '.1em',
          color: C.muted, textTransform: 'uppercase',
        }}>
          Plataforma educativa · Bachillerato
        </div>

        {/* Title */}
        <h1 className="hero-anim2 hero-title" style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 900, lineHeight: 1.05,
          letterSpacing: '-.02em', marginBottom: '24px',
          background: `linear-gradient(135deg, ${C.accent1} 0%, ${C.accent2} 60%, #ec4899 100%)`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          TUTLY
        </h1>

        {/* Subtitle */}
        <p className="hero-anim3" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: C.muted, maxWidth: '540px', margin: '0 auto 48px',
          lineHeight: 1.65, fontWeight: 400,
        }}>
          Ayuda <strong style={{ color: C.text, fontWeight: 600 }}>asincrónica</strong> para
          estudiantes de bachillerato. Resuelve tus dudas a tu propio ritmo, sin bloqueos.
        </p>

        {/* CTA */}
        <Link to="/login" className="cta-btn" style={{
          display: 'inline-block',
          padding: '16px 48px',
          background: `linear-gradient(135deg, ${C.accent1}, ${C.accent2})`,
          color: '#fff', fontWeight: 700, fontSize: '1rem',
          borderRadius: '12px', textDecoration: 'none',
          letterSpacing: '.03em',
          boxShadow: '0 6px 28px rgba(91,141,238,.32)',
        }}>
          Entrar a la Plataforma →
        </Link>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${C.borderMid}, transparent)`, margin: '0 clamp(20px, 5vw, 80px)' }} />

      {/* ── STATS ── */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>

          <p style={{
            fontSize: '.8rem', fontWeight: 700, letterSpacing: '.12em',
            textTransform: 'uppercase', color: C.accent1, marginBottom: '12px', textAlign: 'center',
          }}>
            El problema que resolvemos
          </p>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800,
            textAlign: 'center', marginBottom: '48px', color: C.text, lineHeight: 1.3,
          }}>
            Los estudiantes se quedan atascados.<br />
            <span style={{ color: C.muted, fontWeight: 400, fontSize: '.85em' }}>
              Y el tiempo perdido los desmotiva.
            </span>
          </h2>

          {/* Stats grid */}
          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {[
              { value: '10/12', label: 'estudiantes se bloquean en una sola tarea antes de rendirse o copiar' },
              { value: '30–60', label: 'minutos perdidos en promedio por cada bloqueo no resuelto' },
              { value: '100%', label: 'de esos bloqueos podrían resolverse con orientación a tiempo' },
            ].map((s, i) => (
              <div key={i} className="stat-card" style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: '14px',
                padding: '32px 28px',
                cursor: 'default',
              }}>
                <p style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900,
                  background: `linear-gradient(135deg, ${C.accent1}, ${C.accent2})`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  lineHeight: 1, marginBottom: '12px',
                }}>
                  {s.value}
                </p>
                <p style={{ fontSize: '.9rem', color: C.muted, lineHeight: 1.6 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{
            fontSize: '.8rem', fontWeight: 700, letterSpacing: '.12em',
            textTransform: 'uppercase', color: C.accent1, marginBottom: '12px', textAlign: 'center',
          }}>
            Proceso
          </p>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800,
            textAlign: 'center', marginBottom: '48px', color: C.text,
          }}>
            ¿Cómo funciona?
          </h2>

          {/* CSS Grid — responsivo vía clase inyectada */}
          <div className="steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {STEPS.map(step => (
              <div key={step.n} className="step-card" style={{
                background: '#0f0f14',
                border: `1px solid ${C.border}`,
                borderRadius: '14px',
                padding: '32px 28px',
                cursor: 'default',
              }}>
                {/* Number badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  marginBottom: '20px',
                }}>
                  <span style={{
                    fontWeight: 800, fontSize: '.75rem', letterSpacing: '.1em',
                    color: C.faint,
                  }}>
                    {step.n}
                  </span>
                  <span style={{ fontSize: '1.4rem' }}>{step.icon}</span>
                </div>
                <h3 style={{
                  fontSize: '1.05rem', fontWeight: 700,
                  color: C.text, marginBottom: '10px',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '.875rem', color: C.muted, lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 80px)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800,
          color: C.text, marginBottom: '16px', lineHeight: 1.3,
        }}>
          Deja de copiar. Empieza a entender.
        </h2>
        <p style={{ fontSize: '1rem', color: C.muted, marginBottom: '40px' }}>
          Únete a TUTLY y desbloquea tu potencial académico.
        </p>
        <Link to="/login" className="cta-btn" style={{
          display: 'inline-block',
          padding: '16px 52px',
          background: `linear-gradient(135deg, ${C.accent1}, ${C.accent2})`,
          color: '#fff', fontWeight: 700, fontSize: '1.05rem',
          borderRadius: '12px', textDecoration: 'none',
          letterSpacing: '.03em',
          boxShadow: '0 6px 28px rgba(91,141,238,.32)',
        }}>
          Entrar a la Plataforma →
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: `1px solid ${C.border}`,
        padding: '32px clamp(20px, 5vw, 80px)',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'center',
        gap: '16px', textAlign: 'center',
      }}>
        <span style={{ fontSize: '.82rem', color: C.faint }}>
          © {new Date().getFullYear()} <strong style={{ color: C.muted }}>JOBM Tech</strong> · Todos los derechos reservados
        </span>
        <span style={{ color: C.border, userSelect: 'none' }}>|</span>
        <Link to="/privacidad" className="footer-link" style={{
          fontSize: '.82rem', color: C.faint, textDecoration: 'none',
        }}>
          Política de Privacidad
        </Link>
      </footer>

    </div>
  );
}
