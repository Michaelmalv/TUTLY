import { Link } from 'react-router-dom';

const styles = {
  page: {
    backgroundColor: '#121212',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 20px',
  },

  // ─── HERO ────────────────────────────────────────────────────────────────────
  hero: {
    width: '100%',
    maxWidth: '760px',
    textAlign: 'center',
    padding: '80px 0 60px',
  },
  logo: {
    fontSize: '4rem',
    fontWeight: '900',
    letterSpacing: '0.15em',
    color: '#4facfe',
    margin: '0 0 16px',
    textShadow: '0 0 40px rgba(79,172,254,0.45)',
  },
  tagline: {
    fontSize: '1.25rem',
    color: '#b0b8c8',
    margin: '0 0 40px',
    lineHeight: 1.6,
  },
  ctaBtn: {
    display: 'inline-block',
    padding: '14px 44px',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#0a0a0a',
    fontWeight: '700',
    fontSize: '1rem',
    borderRadius: '50px',
    textDecoration: 'none',
    letterSpacing: '0.04em',
    boxShadow: '0 4px 24px rgba(79,172,254,0.4)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },

  // ─── PROBLEM ─────────────────────────────────────────────────────────────────
  section: {
    width: '100%',
    maxWidth: '760px',
    margin: '0 0 60px',
  },
  problemCard: {
    background: 'linear-gradient(135deg, #1e1e2e 0%, #16213e 100%)',
    border: '1px solid rgba(79,172,254,0.2)',
    borderRadius: '16px',
    padding: '36px 40px',
    textAlign: 'center',
  },
  problemLabel: {
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '0.12em',
    color: '#4facfe',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  problemText: {
    fontSize: '1.35rem',
    lineHeight: 1.7,
    color: '#e8eaf0',
    fontWeight: '500',
  },
  highlight: {
    color: '#4facfe',
    fontWeight: '700',
  },

  // ─── HOW IT WORKS ────────────────────────────────────────────────────────────
  sectionTitle: {
    fontSize: '1.6rem',
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '32px',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  stepCard: {
    background: '#1a1a2e',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '14px',
    padding: '28px 24px',
    textAlign: 'center',
    transition: 'border-color 0.2s ease',
  },
  stepNumber: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    color: '#0a0a0a',
    fontWeight: '900',
    fontSize: '1.1rem',
    marginBottom: '14px',
  },
  stepTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 8px',
  },
  stepDesc: {
    fontSize: '0.9rem',
    color: '#8892a4',
    lineHeight: 1.5,
    margin: 0,
  },

  // ─── FOOTER ──────────────────────────────────────────────────────────────────
  footer: {
    width: '100%',
    maxWidth: '760px',
    textAlign: 'center',
    padding: '32px 0 48px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: '0.85rem',
    color: '#5a6478',
    margin: '0 0 8px',
  },
  footerLink: {
    color: '#4facfe',
    textDecoration: 'none',
    fontSize: '0.85rem',
    transition: 'opacity 0.2s ease',
  },
};

const steps = [
  {
    number: '1',
    title: 'Sube tu duda',
    desc: 'Escribe, graba un audio o sube una foto de lo que no entiendes.',
  },
  {
    number: '2',
    title: 'Recibe ayuda',
    desc: 'Un tutor o compañero te responde de forma asincrónica a tu ritmo.',
  },
  {
    number: '3',
    title: 'Avanza',
    desc: 'Retoma tu tarea con la orientación que necesitabas para continuar.',
  },
];

export default function Landing() {
  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <h1 style={styles.logo}>TUTLY</h1>
        <p style={styles.tagline}>
          Ayuda asincrónica para estudiantes de bachillerato
        </p>
        <Link
          to="/login"
          style={styles.ctaBtn}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(79,172,254,0.55)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(79,172,254,0.4)';
          }}
        >
          Comenzar ahora →
        </Link>
      </section>

      {/* ── PROBLEMA ── */}
      <section style={styles.section}>
        <div style={styles.problemCard}>
          <p style={styles.problemLabel}>El problema que resolvemos</p>
          <p style={styles.problemText}>
            <span style={styles.highlight}>10 de cada 12 estudiantes</span> pierden entre{' '}
            <span style={styles.highlight}>30 y 60 minutos</span> bloqueados en una sola
            tarea antes de rendirse o copiar.
          </p>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Cómo funciona</h2>
        <div style={styles.stepsGrid}>
          {steps.map(step => (
            <div
              key={step.number}
              style={styles.stepCard}
              onMouseEnter={e =>
                (e.currentTarget.style.borderColor = 'rgba(79,172,254,0.4)')
              }
              onMouseLeave={e =>
                (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')
              }
            >
              <div style={styles.stepNumber}>{step.number}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 TUTLY · Todos los derechos reservados</p>
        <Link
          to="/privacidad"
          style={styles.footerLink}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Política de Privacidad
        </Link>
      </footer>
    </div>
  );
}
