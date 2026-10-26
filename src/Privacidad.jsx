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
  header: {
    width: '100%',
    maxWidth: '760px',
    padding: '48px 0 32px',
  },
  backLink: {
    color: '#4facfe',
    textDecoration: 'none',
    fontSize: '0.9rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'opacity 0.2s ease',
  },
  content: {
    width: '100%',
    maxWidth: '760px',
    marginBottom: '80px',
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(79,172,254,0.12)',
    border: '1px solid rgba(79,172,254,0.3)',
    color: '#4facfe',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '4px 14px',
    borderRadius: '50px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.4rem',
    fontWeight: '900',
    color: '#ffffff',
    margin: '0 0 40px',
    lineHeight: 1.2,
  },
  card: {
    background: '#1a1a2e',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '36px 40px',
    marginBottom: '24px',
  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#4facfe',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '12px',
  },
  cardText: {
    fontSize: '1rem',
    color: '#c8d0dc',
    lineHeight: 1.75,
    margin: 0,
  },
  footer: {
    width: '100%',
    maxWidth: '760px',
    textAlign: 'center',
    padding: '24px 0 48px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: '0.85rem',
    color: '#5a6478',
    margin: 0,
  },
};

export default function Privacidad() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <Link
          to="/"
          style={styles.backLink}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          ← Volver a inicio
        </Link>
      </header>

      <main style={styles.content}>
        <span style={styles.badge}>Legal</span>
        <h1 style={styles.title}>Política de Privacidad</h1>

        <div style={styles.card}>
          <p style={styles.cardTitle}>Protección de datos</p>
          <p style={styles.cardText}>
            En TUTLY protegemos la información de menores de edad. Solo guardamos nombre,
            colegio, curso y correo electrónico. Fotos y audios son privados.
          </p>
        </div>

        <div style={styles.card}>
          <p style={styles.cardTitle}>Datos que recopilamos</p>
          <p style={styles.cardText}>
            Únicamente almacenamos los datos estrictamente necesarios para brindarte el
            servicio: nombre completo, institución educativa, grado/curso y correo
            electrónico. No compartimos tu información con terceros.
          </p>
        </div>

        <div style={styles.card}>
          <p style={styles.cardTitle}>Contenido multimedia</p>
          <p style={styles.cardText}>
            Las fotografías y grabaciones de audio que subas para resolver tus dudas son
            estrictamente privadas. Solo el tutor asignado puede acceder a ellas durante
            el proceso de ayuda y son eliminadas una vez resuelta la consulta.
          </p>
        </div>
      </main>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 TUTLY · Política actualizada en octubre de 2024</p>
      </footer>
    </div>
  );
}
