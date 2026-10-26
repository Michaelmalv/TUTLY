import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* ─── GLOBAL STYLES ──────────────────────────────────────────────────────── */
if (!document.getElementById('tutly-login-styles')) {
  const s = document.createElement('style');
  s.id = 'tutly-login-styles';
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0a; font-family: 'Inter', system-ui, sans-serif; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes ambientGlow {
      0%,100% { opacity:.16; } 50% { opacity:.28; }
    }
    @keyframes successIn {
      from { opacity:0; transform: scale(.95); }
      to   { opacity:1; transform: scale(1); }
    }

    .l-card    { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) both; }
    .l-success { animation: successIn .5s cubic-bezier(.22,1,.36,1) both; }

    .l-input {
      width: 100%; padding: 13px 16px;
      background: #0f0f0f; border: 1px solid #2a2a2a;
      border-radius: 9px; color: #e5e5e5;
      font-size: .93rem; font-family: 'Inter', sans-serif;
      transition: border-color .18s ease, box-shadow .18s ease;
      outline: none;
    }
    .l-input::placeholder { color: #555; }
    .l-input:focus {
      border-color: #2F5BEA;
      box-shadow: 0 0 0 3px rgba(47,91,234,.18);
    }
    .l-input.error { border-color: #ef4444; }
    .l-input.error:focus { box-shadow: 0 0 0 3px rgba(239,68,68,.15); }

    .l-btn-primary {
      width: 100%; padding: 13px;
      background: linear-gradient(135deg, #2F5BEA, #7c3aed);
      color: #fff; font-weight: 700; font-size: .93rem;
      border: none; border-radius: 9px; cursor: pointer;
      font-family: 'Inter', sans-serif; letter-spacing: .03em;
      transition: opacity .18s ease, transform .18s ease, box-shadow .18s ease;
      box-shadow: 0 4px 20px rgba(47,91,234,.28);
    }
    .l-btn-primary:hover:not(:disabled) {
      opacity: .88; transform: translateY(-1px);
      box-shadow: 0 8px 28px rgba(47,91,234,.4);
    }
    .l-btn-primary:disabled { opacity: .45; cursor: not-allowed; }

    .l-btn-back {
      width: 100%; padding: 12px;
      background: transparent; color: #a3a3a3;
      font-weight: 500; font-size: .88rem;
      border: 1px solid #2a2a2a; border-radius: 9px;
      cursor: pointer; font-family: 'Inter', sans-serif;
      text-decoration: none; display: block; text-align: center;
      transition: border-color .18s ease, color .18s ease;
    }
    .l-btn-back:hover { border-color: #2F5BEA; color: #e5e5e5; }

    @media (max-width: 480px) {
      .l-card-wrap { padding: 28px 20px !important; }
    }
  `;
  document.head.appendChild(s);
}

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
const PROFESSOR_EMAIL = 'profesor@tutly.com';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [emailErr, setEmailErr]   = useState('');
  const [passErr, setPassErr]     = useState('');
  const [globalErr, setGlobalErr] = useState('');
  const [loading, setLoading]     = useState(false);
  const [success, setSuccess]     = useState(false);

  const validate = () => {
    let ok = true;
    setEmailErr(''); setPassErr(''); setGlobalErr('');
    if (!email) { setEmailErr('El correo es requerido.'); ok = false; }
    else if (!/\S+@\S+\.\S+/.test(email)) { setEmailErr('Ingresa un correo válido.'); ok = false; }
    if (!password) { setPassErr('La contraseña es requerida.'); ok = false; }
    else if (password.length < 6) { setPassErr('Mínimo 6 caracteres.'); ok = false; }
    return ok;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email.trim().toLowerCase() === PROFESSOR_EMAIL) {
        setSuccess(true);
      } else {
        setGlobalErr('Credenciales incorrectas.');
      }
    }, 900);
  };

  /* ── Success State ── */
  if (success) {
    return (
      <div style={{
        background: '#0a0a0a', minHeight: '100vh', fontFamily: "'Inter', sans-serif",
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px',
      }}>
        <div className="l-success" style={{
          width: '100%', maxWidth: '420px',
          background: '#0f1a0f', border: '1px solid #1f4d1f',
          borderRadius: '16px', padding: '48px 36px', textAlign: 'center',
        }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #16a34a, #22c55e)',
            margin: '0 auto 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#e5e5e5', marginBottom: '10px' }}>
            Acceso autorizado
          </h2>
          <p style={{ fontSize: '.9rem', color: '#86efac', lineHeight: 1.6 }}>
            Redirigiendo al panel de tutorías...
          </p>
        </div>
      </div>
    );
  }

  /* ── Form State ── */
  return (
    <div style={{
      background: '#0a0a0a', minHeight: '100vh', fontFamily: "'Inter', sans-serif",
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient blob */}
      <div style={{
        position: 'fixed', top: '-220px', left: '50%',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(47,91,234,.15) 0%, transparent 70%)',
        animation: 'ambientGlow 7s ease-in-out infinite', pointerEvents: 'none',
      }} />

      {/* Card */}
      <div className="l-card" style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1 }}>

        {/* Brand */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{
            display: 'block', fontWeight: 900, fontSize: '1.4rem',
            letterSpacing: '.12em', marginBottom: '10px',
            background: 'linear-gradient(135deg, #2F5BEA, #7c3aed)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            TUTLY
          </span>
          <h1 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#e5e5e5', marginBottom: '6px' }}>
            Iniciar Sesión
          </h1>
          <p style={{ fontSize: '.84rem', color: '#a3a3a3' }}>
            Accede a tu cuenta para continuar
          </p>
        </div>

        {/* Form card */}
        <div className="l-card-wrap" style={{
          background: '#1a1a1a', border: '1px solid #333',
          borderRadius: '14px', padding: '32px 28px',
        }}>

          {/* Global error */}
          {globalErr && (
            <div style={{
              background: 'rgba(239,68,68,.08)', border: '1px solid rgba(239,68,68,.25)',
              borderRadius: '8px', padding: '11px 14px', marginBottom: '20px',
              fontSize: '.84rem', color: '#f87171', fontWeight: 500,
            }}>
              {globalErr}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            {/* Email */}
            <div>
              <label htmlFor="login-email" style={{ display: 'block', fontSize: '.8rem', fontWeight: 600, color: '#a3a3a3', marginBottom: '7px', letterSpacing: '.03em' }}>
                Correo electrónico
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={e => { setEmail(e.target.value); if (emailErr) setEmailErr(''); if (globalErr) setGlobalErr(''); }}
                className={`l-input${emailErr ? ' error' : ''}`}
              />
              {emailErr && <span style={{ display: 'block', marginTop: '5px', fontSize: '.76rem', color: '#f87171' }}>{emailErr}</span>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="login-password" style={{ display: 'block', fontSize: '.8rem', fontWeight: 600, color: '#a3a3a3', marginBottom: '7px', letterSpacing: '.03em' }}>
                Contraseña
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={e => { setPassword(e.target.value); if (passErr) setPassErr(''); if (globalErr) setGlobalErr(''); }}
                className={`l-input${passErr ? ' error' : ''}`}
              />
              {passErr && <span style={{ display: 'block', marginTop: '5px', fontSize: '.76rem', color: '#f87171' }}>{passErr}</span>}
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading} className="l-btn-primary" style={{ marginTop: '4px' }}>
              {loading ? 'Verificando...' : 'Iniciar Sesión'}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0', color: '#444', fontSize: '.75rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#222' }} />
            o
            <div style={{ flex: 1, height: '1px', background: '#222' }} />
          </div>

          {/* Back button */}
          <Link to="/" className="l-btn-back">
            Volver a Inicio
          </Link>
        </div>

        {/* Footer note */}
        <p style={{ marginTop: '24px', fontSize: '.74rem', color: '#444', textAlign: 'center' }}>
          © {new Date().getFullYear()} JOBM Tech ·{' '}
          <Link to="/privacidad" style={{ color: '#555', textDecoration: 'underline' }}>
            Política de Privacidad
          </Link>
        </p>
      </div>
    </div>
  );
}
