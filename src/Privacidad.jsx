import { Link } from 'react-router-dom';

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

const SECTIONS = [
  {
    title: 'Datos que recopilamos',
    body:  'Únicamente almacenamos los datos estrictamente necesarios para brindarte el servicio: nombre completo, institución educativa, grado o curso y correo electrónico. No compartimos tu información con terceros bajo ninguna circunstancia.',
  },
  {
    title: 'Protección de menores',
    body:  'En TUTLY protegemos la información de menores de edad. Solo guardamos nombre, colegio, curso y correo electrónico. Ningún dato sensible adicional es solicitado ni almacenado.',
  },
  {
    title: 'Contenido multimedia',
    body:  'Las fotografías y grabaciones de audio que subas para resolver tus dudas son estrictamente privadas. Solo el tutor asignado puede acceder a ellas durante el proceso de ayuda. Dicho contenido es eliminado de nuestros servidores una vez resuelta la consulta.',
  },
  {
    title: 'Seguridad',
    body:  'Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos contra accesos no autorizados, pérdida o destrucción accidental. Nuestros sistemas utilizan cifrado en tránsito (TLS) y en reposo.',
  },
  {
    title: 'Tus derechos',
    body:  'Puedes solicitar en cualquier momento el acceso, rectificación o eliminación de tus datos personales escribiéndonos a privacidad@tutly.app. Atendemos todas las solicitudes en un plazo máximo de 15 días hábiles.',
  },
  {
    title: 'Cambios a esta política',
    body:  'JOBM Tech se reserva el derecho de actualizar esta política cuando sea necesario. Notificaremos cambios significativos a través del correo electrónico registrado con al menos 7 días de anticipación.',
  },
];

export default function Privacidad() {
  /* Inject base styles once */
  if (!document.getElementById('tutly-priv-kf')) {
    const s = document.createElement('style');
    s.id = 'tutly-priv-kf';
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: #0a0a0a; }
      .priv-section:hover { border-color: #1f3050 !important; }
      .priv-back:hover { color: #5b8dee !important; border-color: #5b8dee !important; }
      .priv-section, .priv-back { transition: all .2s ease; }
    `;
    document.head.appendChild(s);
  }

  return (
    <div style={{
      backgroundColor: C.bg, color: C.text, minHeight: '100vh',
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 40px)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* ── BACK BUTTON ── */}
        <Link to="/" className="priv-back" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          marginBottom: '48px',
          padding: '9px 18px',
          border: `1px solid ${C.borderMid}`,
          borderRadius: '8px',
          color: C.muted,
          textDecoration: 'none',
          fontSize: '.875rem', fontWeight: 500,
        }}>
          ← Volver al inicio
        </Link>

        {/* ── HEADER ── */}
        <div style={{ marginBottom: '56px' }}>
          <p style={{
            fontSize: '.75rem', fontWeight: 700, letterSpacing: '.12em',
            textTransform: 'uppercase', color: C.accent1, marginBottom: '12px',
          }}>
            Documento Legal
          </p>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800,
            color: C.text, lineHeight: 1.2, marginBottom: '16px',
          }}>
            Política de Privacidad
          </h1>
          <p style={{ fontSize: '.9rem', color: C.faint, lineHeight: 1.6 }}>
            Última actualización: octubre de 2024 · JOBM Tech para TUTLY
          </p>
        </div>

        {/* ── INTRO ── */}
        <div style={{
          background: `linear-gradient(135deg, rgba(91,141,238,.06), rgba(168,85,247,.06))`,
          border: `1px solid rgba(91,141,238,.2)`,
          borderRadius: '14px',
          padding: '28px 32px',
          marginBottom: '40px',
        }}>
          <p style={{ fontSize: '.95rem', color: C.text, lineHeight: 1.75 }}>
            En <strong style={{ color: C.accent1 }}>TUTLY</strong>, desarrollado por{' '}
            <strong style={{ color: C.text }}>JOBM Tech</strong>, nos comprometemos a
            proteger la privacidad de todos nuestros usuarios, especialmente la de los
            menores de edad. Esta política describe qué datos recopilamos, cómo los
            usamos y cómo los protegemos.
          </p>
        </div>

        {/* ── SECTIONS ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
          {SECTIONS.map((sec, i) => (
            <div key={i} className="priv-section" style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: '12px',
              padding: '28px 32px',
            }}>
              <h2 style={{
                fontSize: '1rem', fontWeight: 700,
                color: C.text, marginBottom: '10px',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <span style={{
                  display: 'inline-block', width: '22px', height: '22px',
                  background: `linear-gradient(135deg, ${C.accent1}, ${C.accent2})`,
                  borderRadius: '6px', flexShrink: 0,
                  fontSize: '.7rem', fontWeight: 800, color: '#fff',
                  textAlign: 'center', lineHeight: '22px',
                }}>
                  {i + 1}
                </span>
                {sec.title}
              </h2>
              <p style={{ fontSize: '.9rem', color: C.muted, lineHeight: 1.75 }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <div style={{
          borderTop: `1px solid ${C.border}`,
          paddingTop: '32px',
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'center', gap: '12px',
        }}>
          <p style={{ fontSize: '.82rem', color: C.faint }}>
            © {new Date().getFullYear()} <strong style={{ color: C.muted }}>JOBM Tech</strong> · Todos los derechos reservados
          </p>
          <Link to="/" style={{
            fontSize: '.82rem', color: C.accent1, textDecoration: 'none',
          }}>
            tutly.app
          </Link>
        </div>

      </div>
    </div>
  );
}
