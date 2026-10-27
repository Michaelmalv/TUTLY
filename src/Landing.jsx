import { Link } from 'react-router-dom';

/* ─── GLOBAL STYLES ────────────────────────────────────────────────────────── */
(function injectGlobal() {
  if (document.getElementById('tly-g')) return;
  const el = document.createElement('style');
  el.id = 'tly-g';
  el.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #0a0a0a; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes blob {
      0%,100% { opacity: .18; transform: translateX(-50%) scale(1); }
      50%      { opacity: .28; transform: translateX(-50%) scale(1.1); }
    }

    .tly-up1 { animation: fadeUp .65s cubic-bezier(.22,1,.36,1) both; }
    .tly-up2 { animation: fadeUp .65s .12s cubic-bezier(.22,1,.36,1) both; }
    .tly-up3 { animation: fadeUp .65s .24s cubic-bezier(.22,1,.36,1) both; }
    .tly-up4 { animation: fadeUp .65s .36s cubic-bezier(.22,1,.36,1) both; }

    /* Card hovers */
    .tly-card { transition: border-color .2s, transform .2s, background .2s; }
    .tly-card:hover { border-color: #2F5BEA !important; transform: translateY(-3px); }
    .tly-step:hover { background: #161620 !important; border-color: #2F5BEA !important; }

    /* Buttons */
    .tly-cta { transition: opacity .18s, transform .18s, box-shadow .18s; }
    .tly-cta:hover { opacity:.86; transform:translateY(-2px); box-shadow:0 12px 36px rgba(47,91,234,.42) !important; }

    .tly-nav-btn { transition: border-color .18s, color .18s; }
    .tly-nav-btn:hover { border-color: #2F5BEA !important; color: #e5e5e5 !important; }

    .tly-foot-a { transition: color .18s; }
    .tly-foot-a:hover { color: #7c9ef5 !important; }

    /* Responsive */
    @media (max-width: 680px) {
      .tly-grid3 { grid-template-columns: 1fr !important; }
      .tly-hero-h { font-size: clamp(2rem, 9vw, 3.2rem) !important; }
      .tly-pad { padding-left: 18px !important; padding-right: 18px !important; }
    }
  `;
  document.head.appendChild(el);
}());

/* ─── TOKENS ──────────────────────────────────────────────────────────────── */
const bg    = '#0a0a0a';
const surf  = '#1a1a1a';
const bord  = '#333333';
const bordLo= '#1f1f1f';
const txt   = '#e5e5e5';
const muted = '#a3a3a3';
const faint = '#555555';
const grad  = 'linear-gradient(135deg, #2F5BEA 0%, #7c3aed 100%)';
const gradT = 'linear-gradient(135deg, #6090ff 0%, #a78bfa 100%)';

/* ─── SUB-COMPONENTS ──────────────────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <p style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.16em',
      textTransform: 'uppercase', color: '#6090ff', marginBottom: '10px', textAlign: 'center' }}>
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.85rem)', fontWeight: 800,
      color: txt, textAlign: 'center', marginBottom: '36px', lineHeight: 1.3 }}>
      {children}
    </h2>
  );
}

/* ─── MAIN COMPONENT ──────────────────────────────────────────────────────── */
export default function Landing() {
  return (
    <div style={{ background: bg, color: txt, minHeight: '100vh', fontFamily: "'Inter',sans-serif" }}>

      {/* ══ NAV ══ */}
      <nav className="tly-pad" style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 0, paddingBottom: 0,
        paddingLeft: 'clamp(16px,5vw,72px)', paddingRight: 'clamp(16px,5vw,72px)',
        height: '58px',
        background: 'rgba(10,10,10,.92)', backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${bordLo}`,
      }}>
        <span style={{ fontWeight: 900, fontSize: '.95rem', letterSpacing: '.14em',
          background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          TUTLY
        </span>
        <Link to="/login" className="tly-nav-btn" style={{
          padding: '7px 18px', borderRadius: '8px',
          border: `1px solid ${bord}`, color: muted,
          textDecoration: 'none', fontSize: '.8rem', fontWeight: 500,
        }}>
          Iniciar sesión
        </Link>
      </nav>

      {/* ══ HERO ══ */}
      <section className="tly-pad" style={{
        paddingLeft: 'clamp(18px,5vw,72px)', paddingRight: 'clamp(18px,5vw,72px)',
        paddingTop: 'clamp(72px,12vw,128px)', paddingBottom: 'clamp(64px,10vw,112px)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* Background blob */}
        <div style={{
          position: 'absolute', top: '-180px', left: '50%',
          width: '640px', height: '640px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47,91,234,.2) 0%, transparent 70%)',
          animation: 'blob 8s ease-in-out infinite', pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div className="tly-up1" style={{
          display: 'inline-block', marginBottom: '28px',
          padding: '5px 16px', borderRadius: '50px',
          border: `1px solid ${bord}`,
          fontSize: '.7rem', fontWeight: 600, letterSpacing: '.12em',
          color: faint, textTransform: 'uppercase',
        }}>
          Plataforma de tutorías asincrónicas
        </div>

        {/* Headline */}
        <h1 className="tly-up2 tly-hero-h" style={{
          fontSize: 'clamp(2.1rem, 6vw, 4.8rem)',
          fontWeight: 900, lineHeight: 1.06, letterSpacing: '-.03em',
          marginBottom: '22px',
          background: gradT,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          TUTLY: Tutoría que sí te destraba
        </h1>

        {/* Sub */}
        <p className="tly-up3" style={{
          fontSize: 'clamp(.92rem, 2vw, 1.15rem)',
          color: muted, maxWidth: '480px', margin: '0 auto 44px', lineHeight: 1.7,
        }}>
          Aprender es más fácil cuando alguien te explica el{' '}
          <span style={{ color: txt, fontWeight: 600 }}>porqué</span>.
        </p>

        {/* CTA */}
        <Link to="/login" className="tly-up4 tly-cta" style={{
          display: 'inline-block',
          padding: '14px 44px',
          background: grad, color: '#fff',
          fontWeight: 700, fontSize: '.95rem',
          borderRadius: '10px', textDecoration: 'none',
          letterSpacing: '.03em',
          boxShadow: '0 6px 28px rgba(47,91,234,.30)',
        }}>
          Entrar a la Plataforma
        </Link>
      </section>

      {/* ══ STAT HIGHLIGHT ══ */}
      <section className="tly-pad" style={{
        paddingLeft: 'clamp(18px,5vw,72px)', paddingRight: 'clamp(18px,5vw,72px)',
        paddingTop: 'clamp(52px,7vw,88px)', paddingBottom: 'clamp(52px,7vw,88px)',
        background: surf,
        borderTop: `1px solid ${bordLo}`, borderBottom: `1px solid ${bordLo}`,
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <SectionLabel>El problema real</SectionLabel>
          {/* Big stat quote */}
          <div style={{
            background: bg, border: `1px solid ${bord}`,
            borderRadius: '14px', padding: 'clamp(28px,4vw,44px) clamp(24px,4vw,48px)',
            marginBottom: '28px', textAlign: 'center',
          }}>
            <p style={{
              fontSize: 'clamp(1.05rem, 2.8vw, 1.55rem)', fontWeight: 700,
              color: txt, lineHeight: 1.5,
            }}>
              <span style={{
                background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontWeight: 900,
              }}>
                10 de cada 12 estudiantes
              </span>{' '}
              pierden entre{' '}
              <span style={{ color: '#a78bfa', fontWeight: 700 }}>30 y 60 minutos</span>{' '}
              bloqueados en una sola tarea
            </p>
          </div>
          {/* Supporting cards */}
          <div className="tly-grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
            {[
              { v: '10 / 12', d: 'estudiantes se bloquean en una tarea antes de rendirse o copiar' },
              { v: '30–60 min', d: 'perdidos por cada bloqueo no resuelto en promedio' },
              { v: '1 explicación', d: 'clara de un tutor puede destrabar horas de frustración' },
            ].map((s, i) => (
              <div key={i} className="tly-card" style={{
                background: surf, border: `1px solid ${bord}`,
                borderRadius: '11px', padding: '22px 20px',
              }}>
                <p style={{ fontSize: 'clamp(1.3rem,3vw,1.9rem)', fontWeight: 900,
                  background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  marginBottom: '8px', lineHeight: 1 }}>
                  {s.v}
                </p>
                <p style={{ fontSize: '.83rem', color: muted, lineHeight: 1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="tly-pad" style={{
        paddingLeft: 'clamp(18px,5vw,72px)', paddingRight: 'clamp(18px,5vw,72px)',
        paddingTop: 'clamp(52px,7vw,88px)', paddingBottom: 'clamp(52px,7vw,88px)',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <SectionLabel>Proceso</SectionLabel>
          <SectionTitle>¿Cómo funciona?</SectionTitle>

          {/* CSS Grid — 3 cols / 1 col mobile */}
          <div className="tly-grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {[
              { n: '01', t: 'Escribe tu duda o sube una foto',       d: 'Describe lo que no entiendes o adjunta una imagen del ejercicio. Sin complicaciones.' },
              { n: '02', t: 'Recibe audio corto del tutor',            d: 'Recibes una explicación clara con lo que necesitas para continuar.' },
              { n: '03', t: 'Termina tu tarea',                     d: 'Con la orientación correcta retomas el control sin copiar ni perder tiempo.' },
            ].map(step => (
              <div key={step.n} className="tly-card tly-step" style={{
                background: surf, border: `1px solid ${bord}`,
                borderRadius: '12px', padding: '26px 22px',
              }}>
                <span style={{ display: 'block', fontSize: '.68rem', fontWeight: 800,
                  letterSpacing: '.14em', color: faint, marginBottom: '14px' }}>
                  PASO {step.n}
                </span>
                <h3 style={{ fontSize: '.93rem', fontWeight: 700, color: txt,
                  marginBottom: '10px', lineHeight: 1.4 }}>
                  {step.t}
                </h3>
                <p style={{ fontSize: '.83rem', color: muted, lineHeight: 1.65 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECOND CTA ══ */}
      <section className="tly-pad" style={{
        paddingLeft: 'clamp(18px,5vw,72px)', paddingRight: 'clamp(18px,5vw,72px)',
        paddingTop: 'clamp(60px,8vw,100px)', paddingBottom: 'clamp(60px,8vw,100px)',
        background: surf,
        borderTop: `1px solid ${bordLo}`,
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: 800,
          color: txt, marginBottom: '14px', lineHeight: 1.25 }}>
          Deja de perder tiempo.<br />Empieza a entender de verdad.
        </h2>
        <p style={{ fontSize: '.93rem', color: muted, marginBottom: '34px' }}>
          Únete a TUTLY y destrábate hoy mismo.
        </p>
        <Link to="/login" className="tly-cta" style={{
          display: 'inline-block', padding: '14px 48px',
          background: grad, color: '#fff',
          fontWeight: 700, fontSize: '.95rem',
          borderRadius: '10px', textDecoration: 'none',
          boxShadow: '0 6px 28px rgba(47,91,234,.28)',
        }}>
          Entrar a la Plataforma
        </Link>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{
        borderTop: `1px solid ${bordLo}`,
        padding: '26px clamp(18px,5vw,72px)',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'center',
        gap: '10px', textAlign: 'center',
      }}>
        <span style={{ fontSize: '.76rem', color: faint }}>
          © {new Date().getFullYear()} <strong style={{ color: muted }}>JOBM Tech</strong>. Todos los derechos reservados.
        </span>
        <span style={{ color: bordLo }}>·</span>
        <Link to="/privacidad" className="tly-foot-a" style={{
          fontSize: '.76rem', color: faint, textDecoration: 'none',
        }}>
          Política de Privacidad
        </Link>
        <span style={{ color: bordLo }}>·</span>
        <Link to="/terminos" className="tly-foot-a" style={{
          fontSize: '.76rem', color: faint, textDecoration: 'none',
        }}>
          Términos y Condiciones
        </Link>
      </footer>

    </div>
  );
}
