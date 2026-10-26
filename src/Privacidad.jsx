import { Link } from 'react-router-dom';

if (!document.getElementById('tutly-priv-styles')) {
  const s = document.createElement('style');
  s.id = 'tutly-priv-styles';
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0a; font-family: 'Inter', system-ui, sans-serif; }
    .p-section { border: 1px solid #222; border-radius: 10px; padding: 24px 28px; background: #1a1a1a; transition: border-color .2s ease; }
    .p-section:hover { border-color: #333; }
    .p-back:hover { border-color: #2F5BEA !important; color: #e5e5e5 !important; }
    .p-back { transition: border-color .2s ease, color .2s ease; }
    @media (max-width: 480px) {
      .p-container { padding: 40px 16px !important; }
    }
  `;
  document.head.appendChild(s);
}

const SECTIONS = [
  {
    title: 'Información que recopilamos',
    body: 'Solo solicitamos datos estrictamente necesarios para el servicio: nombre completo, institución educativa, grado/curso y correo electrónico. No recopilamos números de teléfono, redes sociales, dirección física ni ningún dato de contacto adicional.'
  },
  {
    title: 'Protección de menores de edad',
    body: 'TUTLY está diseñado para estudiantes de bachillerato. Implementamos protecciones especiales para usuarios menores de edad. No permitimos que ningún dato personal de menores sea compartido, vendido o usado con fines publicitarios.'
  },
  {
    title: 'Contenido multimedia privado',
    body: 'Las fotografías y grabaciones de audio que subas para resolver tus dudas son estrictamente privadas. Solo el tutor asignado puede acceder a ellas durante la sesión. El contenido multimedia es eliminado de nuestros servidores una vez resuelta la consulta.'
  },
  {
    title: 'No compartimos tu información',
    body: 'JOBM Tech no vende, alquila ni comparte tu información personal con terceros bajo ninguna circunstancia, salvo obligación legal. Tampoco compartimos datos con plataformas de publicidad ni redes de rastreo.'
  },
  {
    title: 'Seguridad de los datos',
    body: 'Utilizamos cifrado TLS en tránsito y cifrado en reposo para todos los datos almacenados. Nuestros servidores están protegidos contra accesos no autorizados con medidas de seguridad actualizadas periódicamente.'
  },
  {
    title: 'Tus derechos',
    body: 'Puedes solicitar en cualquier momento el acceso, rectificación o eliminación de tus datos personales escribiendo a privacidad@tutly.app. Respondemos todas las solicitudes en un plazo máximo de 15 días hábiles.'
  },
];

export default function Privacidad() {
  return (
    <div className="p-container" style={{
      background: '#0a0a0a', color: '#e5e5e5', minHeight: '100vh',
      fontFamily: "'Inter', sans-serif",
      padding: 'clamp(40px, 7vw, 80px) clamp(16px, 5vw, 40px)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Back */}
        <Link to="/" className="p-back" style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          padding: '8px 18px', marginBottom: '48px',
          border: '1px solid #333', borderRadius: '8px',
          color: '#a3a3a3', textDecoration: 'none',
          fontSize: '.84rem', fontWeight: 500,
        }}>
          &#8592; Volver al inicio
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <p style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#6090ff', marginBottom: '10px' }}>
            Documento legal
          </p>
          <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', fontWeight: 800, color: '#e5e5e5', lineHeight: 1.2, marginBottom: '14px' }}>
            Política de Privacidad
          </h1>
          <p style={{ fontSize: '.84rem', color: '#555' }}>
            Última actualización: octubre de 2024 · JOBM Tech para TUTLY
          </p>
        </div>

        {/* Intro highlight */}
        <div style={{
          background: 'rgba(47,91,234,.06)', border: '1px solid rgba(47,91,234,.18)',
          borderRadius: '12px', padding: '24px 28px', marginBottom: '32px',
        }}>
          <p style={{ fontSize: '.92rem', color: '#e5e5e5', lineHeight: 1.75 }}>
            En <strong style={{ color: '#7c9ef5' }}>TUTLY</strong>, desarrollado por{' '}
            <strong style={{ color: '#e5e5e5' }}>JOBM Tech</strong>, nos comprometemos a
            proteger la privacidad de todos nuestros usuarios. Esta política describe qué
            datos recopilamos, cómo los usamos y las medidas que tomamos para protegerlos,
            con especial énfasis en la seguridad de los menores de edad.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '56px' }}>
          {SECTIONS.map((sec, i) => (
            <div key={i} className="p-section">
              <h2 style={{
                fontSize: '.93rem', fontWeight: 700, color: '#e5e5e5',
                marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '20px', height: '20px', borderRadius: '5px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #2F5BEA, #7c3aed)',
                  fontSize: '.65rem', fontWeight: 800, color: '#fff',
                }}>
                  {i + 1}
                </span>
                {sec.title}
              </h2>
              <p style={{ fontSize: '.86rem', color: '#a3a3a3', lineHeight: 1.75 }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #1f1f1f', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ fontSize: '.76rem', color: '#444' }}>
            © {new Date().getFullYear()} <strong style={{ color: '#555' }}>JOBM Tech</strong>. Todos los derechos reservados.
          </p>
          <Link to="/" style={{ fontSize: '.76rem', color: '#2F5BEA', textDecoration: 'none' }}>
            tutly.app
          </Link>
        </div>

      </div>
    </div>
  );
}
