import { Link } from 'react-router-dom';

/* ─── GLOBAL STYLES INJECTION ─────────────────────────────────────────────── */
if (!document.getElementById('tutly-global')) {
  const s = document.createElement('style');
  s.id = 'tutly-global';
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #0a0a0a; font-family: 'Inter', system-ui, sans-serif; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes ambientGlow {
      0%, 100% { opacity: 0.18; transform: translateX(-50%) scale(1); }
      50%       { opacity: 0.30; transform: translateX(-50%) scale(1.08); }
    }

    .t-fadein   { animation: fadeUp .7s cubic-bezier(.22,1,.36,1) both; }
    .t-fadein-2 { animation: fadeUp .7s .12s cubic-bezier(.22,1,.36,1) both; }
    .t-fadein-3 { animation: fadeUp .7s .24s cubic-bezier(.22,1,.36,1) both; }
    .t-fadein-4 { animation: fadeUp .7s .36s cubic-bezier(.22,1,.36,1) both; }

    /* ── CARD HOVERS ── */
    .t-stat-card:hover { border-color: #2F5BEA !important; transform: translateY(-4px); }
    .t-step-card:hover { border-color: #2F5BEA !important; background: #1e1e2a !important; }
    .t-stat-card, .t-step-card { transition: border-color .2s ease, transform .2s ease, background .2s ease; }

    /* ── BUTTONS ── */
    .t-btn-primary:hover  { opacity: .88; transform: translateY(-2px); box-shadow: 0 12px 36px rgba(47,91,234,.4) !important; }
    .t-btn-outline:hover  { border-color: #2F5BEA !important; color: #e5e5e5 !important; }
    .t-btn-primary, .t-btn-outline { transition: all .2s ease; }

    /* ── FOOTER LINK ── */
    .t-footer-link:hover { color: #7c9ef5 !important; }
    .t-footer-link { transition: color .2s ease; }

    /* ── RESPONSIVE GRIDS ── */
    @media (max-width: 700px) {
      .t-steps-grid { grid-template-columns: 1fr !important; }
      .t-stats-grid { grid-template-columns: 1fr !important; }
      .t-hero-title { font-size: clamp(2rem, 10vw, 3.5rem) !important; }
      .t-section    { padding: 56px 20px !important; }
    }
    @media (max-width: 480px) {
      .t-nav { padding: 0 16px !important; }
    }
  `;
  document.head.appendChild(s);
}

/* ─── DESIGN TOKENS ──────────────────────────────────────────────────────── */
const T = {
  bg:       '#0a0a0a',
  surf:     '#1a1a1a',
  border:   '#333333',
  borderLo: '#222222',
  text:     '#e5e5e5',
  muted:    '#a3a3a3',
  faint:    '#555555',
  blue:     '#2F5BEA',
  grad:     'linear-gradient(135deg, #2F5BEA 0%, #7c3aed 100%)',
  gradText: 'linear-gradient(135deg, #6090ff 0%, #a78bfa 100%)',
};

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const STATS = [
  { value: '10 de 12',  desc: 'estudiantes se bloquean en una sola tarea antes de rendirse o copiar' },
  { value: '30–60 min', desc: 'perdidos en promedio por cada bloqueo no resuelto' },
  { value: '1 audio',   desc: 'de un tutor universitario puede destrabar horas de frustración' },
];

const STEPS = [
  { n: '01', title: 'Escribe tu duda o sube una foto', desc: 'Describe lo que no entiendes o adjunta la imagen del ejercicio. Sin límites de formato.' },
  { n: '02', title: 'Un tutor universitario te responde', desc: 'Recibes un audio corto y claro explicando el concepto exacto que necesitas.' },
  { n: '03', title: 'Destrábate y termina tu tarea',   desc: 'Con la orientación correcta retomas el control. Sin copiar, sin frustrarte.' },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function Landing() {
  return (
    <div style={{ background: T.bg, color: T.text, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>

      {/* ════════════ NAV ════════════ */}
      <nav className="t-nav" style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(16px, 5vw, 72px)', height: '60px',
        background: 'rgba(10,10,10,.9)', backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${T.borderLo}`,
      }}>
        <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '.12em', background: T.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          TUTLY
        </span>
        <Link to="/login" className="t-btn-outline" style={{
          padding: '7px 20px', borderRadius: '8px',
          border: `1px solid ${T.border}`, color: T.muted,
          textDecoration: 'none', fontSize: '.82rem', fontWeight: 500,
        }}>
          Iniciar sesión
        </Link>
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section className="t-section" style={{ padding: 'clamp(72px, 12vw, 128px) clamp(20px, 5vw, 72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient blob */}
        <div style={{
          position: 'absolute', top: '-160px', left: '50%',
          width: '640px', height: '640px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47,91,234,.22) 0%, transparent 68%)',
          animation: 'ambientGlow 7s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div className="t-fadein" style={{
          display: 'inline-block', marginBottom: '32px',
          padding: '5px 16px', borderRadius: '50px',
          border: `1px solid ${T.border}`,
          fontSize: '.72rem', fontWeight: 600, letterSpacing: '.12em',
          color: T.faint, textTransform: 'uppercase',
        }}>
          Plataforma educativa · Bachillerato
        </div>

        {/* Headline */}
        <h1 className="t-fadein-2 t-hero-title" style={{
          fontSize: 'clamp(2.2rem, 6.5vw, 5rem)',
          fontWeight: 900, lineHeight: 1.08,
          letterSpacing: '-.03em', marginBottom: '24px',
          background: T.gradText,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          TUTLY: Tutoría que<br />sí te destraba.
        </h1>

        {/* Subheadline */}
        <p className="t-fadein-3" style={{
          fontSize: 'clamp(.95rem, 2.2vw, 1.2rem)',
          color: T.muted, maxWidth: '500px', margin: '0 auto 48px',
          lineHeight: 1.7, fontWeight: 400,
        }}>
          Aprender es más fácil cuando alguien<br />te explica el <em style={{ color: T.text, fontStyle: 'normal', fontWeight: 600 }}>porqué</em>.
        </p>

        {/* CTA */}
        <Link to="/login" className="t-fadein-4 t-btn-primary" style={{
          display: 'inline-block',
          padding: '15px 44px',
          background: T.grad, color: '#fff',
          fontWeight: 700, fontSize: '.95rem',
          borderRadius: '10px', textDecoration: 'none',
          letterSpacing: '.03em',
          boxShadow: '0 6px 28px rgba(47,91,234,.30)',
        }}>
          Entrar a la Plataforma
        </Link>
      </section>

      {/* ════════════ STATS ════════════ */}
      <section className="t-section" style={{ padding: 'clamp(56px, 8vw, 96px) clamp(20px, 5vw, 72px)', background: T.surf, borderTop: `1px solid ${T.borderLo}`, borderBottom: `1px solid ${T.borderLo}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#6090ff', marginBottom: '10px', textAlign: 'center' }}>
            El problema real
          </p>
          <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', fontWeight: 800, textAlign: 'center', marginBottom: '40px', color: T.text, lineHeight: 1.3 }}>
            10 de cada 12 estudiantes pierden entre<br />
            <span style={{ color: T.muted, fontWeight: 400 }}>30 y 60 minutos bloqueados en una sola tarea.</span>
          </h2>

          <div className="t-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {STATS.map((s, i) => (
              <div key={i} className="t-stat-card" style={{
                background: T.bg, border: `1px solid ${T.border}`,
                borderRadius: '12px', padding: '28px 24px', cursor: 'default',
              }}>
                <p style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 900,
                  background: T.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  lineHeight: 1, marginBottom: '10px',
                }}>
                  {s.value}
                </p>
                <p style={{ fontSize: '.85rem', color: T.muted, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <section className="t-section" style={{ padding: 'clamp(56px, 8vw, 96px) clamp(20px, 5vw, 72px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#6090ff', marginBottom: '10px', textAlign: 'center' }}>
            Proceso
          </p>
          <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', fontWeight: 800, textAlign: 'center', marginBottom: '40px', color: T.text }}>
            ¿Cómo funciona?
          </h2>

          {/* CSS Grid — 3 cols desktop / 1 col mobile */}
          <div className="t-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {STEPS.map(step => (
              <div key={step.n} className="t-step-card" style={{
                background: T.surf, border: `1px solid ${T.border}`,
                borderRadius: '12px', padding: '28px 24px', cursor: 'default',
              }}>
                <span style={{ display: 'block', fontWeight: 800, fontSize: '.7rem', letterSpacing: '.12em', color: T.faint, marginBottom: '16px' }}>
                  PASO {step.n}
                </span>
                <h3 style={{ fontSize: '.95rem', fontWeight: 700, color: T.text, marginBottom: '10px', lineHeight: 1.4 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '.84rem', color: T.muted, lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FINAL CTA ════════════ */}
      <section className="t-section" style={{ padding: 'clamp(64px, 10vw, 112px) clamp(20px, 5vw, 72px)', textAlign: 'center', background: T.surf, borderTop: `1px solid ${T.borderLo}` }}>
        <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontWeight: 800, color: T.text, marginBottom: '14px', lineHeight: 1.25 }}>
          Deja de perder tiempo.<br />Empieza a entender de verdad.
        </h2>
        <p style={{ fontSize: '.95rem', color: T.muted, marginBottom: '36px' }}>
          Únete a TUTLY y destrábate hoy mismo.
        </p>
        <Link to="/login" className="t-btn-primary" style={{
          display: 'inline-block', padding: '15px 48px',
          background: T.grad, color: '#fff',
          fontWeight: 700, fontSize: '1rem',
          borderRadius: '10px', textDecoration: 'none',
          boxShadow: '0 6px 28px rgba(47,91,234,.30)',
        }}>
          Entrar a la Plataforma
        </Link>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer style={{
        borderTop: `1px solid ${T.borderLo}`,
        padding: '28px clamp(20px, 5vw, 72px)',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'center',
        gap: '12px', textAlign: 'center',
      }}>
        <span style={{ fontSize: '.78rem', color: T.faint }}>
          © {new Date().getFullYear()} <strong style={{ color: T.muted }}>JOBM Tech</strong>. Todos los derechos reservados.
        </span>
        <span style={{ color: T.borderLo }}>|</span>
        <Link to="/privacidad" className="t-footer-link" style={{ fontSize: '.78rem', color: T.faint, textDecoration: 'none' }}>
          Política de Privacidad
        </Link>
      </footer>

    </div>
  );
}
