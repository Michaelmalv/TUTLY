import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Respeto a los tutores',
    text: 'Mantén una comunicación respetuosa con los tutores. No se permiten insultos, acoso ni conductas discriminatorias.',
  },
  {
    title: 'Uso académico responsable',
    text: 'TUTLY es exclusivamente una herramienta de apoyo académico. Utiliza las explicaciones para aprender y desarrollar tus propias habilidades.',
  },
  {
    title: 'No usar durante exámenes',
    text: 'Está prohibido utilizar la plataforma para hacer trampa en exámenes, evaluaciones u otras actividades en las que no se permita ayuda externa.',
  },
];

export default function Terminos() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: '#e5e5e5',
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: 'clamp(40px, 7vw, 80px) clamp(16px, 5vw, 40px)',
    }}>
      <article style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/" style={{
          display: 'inline-block',
          marginBottom: '40px',
          padding: '10px 16px',
          border: '1px solid #333',
          borderRadius: '8px',
          color: '#e5e5e5',
          textDecoration: 'none',
        }}>
          Volver al inicio
        </Link>

        <p style={{
          color: '#6090ff',
          fontSize: '.75rem',
          fontWeight: 700,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          Documento legal
        </p>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          Términos y Condiciones
        </h1>
        <p style={{ color: '#a3a3a3', lineHeight: 1.7, marginBottom: '32px' }}>
          Estas reglas describen el uso responsable de TUTLY como plataforma de apoyo académico.
        </p>

        <div style={{ display: 'grid', gap: '14px' }}>
          {sections.map((section) => (
            <section key={section.title} style={{
              background: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: '10px',
              padding: '22px 24px',
            }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '8px' }}>
                {section.title}
              </h2>
              <p style={{ color: '#a3a3a3', fontSize: '.9rem', lineHeight: 1.75 }}>
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
