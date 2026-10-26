import { useState } from 'react';
import { Link } from 'react-router-dom';

const C = {
  bg:        '#0a0a0a',
  surface:   '#111111',
  border:    '#1f1f1f',
  borderMid: '#2a2a2a',
  borderFocus:'#5b8dee',
  text:      '#e5e5e5',
  muted:     '#888888',
  faint:     '#444444',
  accent1:   '#5b8dee',
  accent2:   '#a855f7',
  error:     '#f87171',
};

/* Inject styles once */
const injectStyles = () => {
  if (document.getElementById('tutly-login-kf')) return;
  const s = document.createElement('style');
  s.id = 'tutly-login-kf';
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0a; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes glowPulse {
      0%, 100% { opacity: .2; }
      50%       { opacity: .45; }
    }
    .login-card { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) both; }

    .login-input:focus {
      outline: none;
      border-color: ${C.borderFocus} !important;
      box-shadow: 0 0 0 3px rgba(91,141,238,.15);
    }
    .login-input { transition: border-color .18s ease, box-shadow .18s ease; }

    .login-submit:hover:not(:disabled) {
      opacity: .88;
      transform: translateY(-1px);
      box-shadow: 0 8px 28px rgba(91,141,238,.4) !important;
    }
    .login-submit:active:not(:disabled) { transform: translateY(0); }
    .login-submit { transition: all .18s ease; }

    .login-back:hover { color: ${C.accent1} !important; border-color: ${C.accent1} !important; }
    .login-back { transition: all .18s ease; }
  `;
  document.head.appendChild(s);
};

export default function Login() {
  injectStyles();

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.email)    e.email    = 'El correo es requerido.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Ingresa un correo válido.';
    if (!form.password) e.password = 'La contraseña es requerida.';
    else if (form.password.length < 6) e.password = 'Mínimo 6 caracteres.';
    return e;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    /* Placeholder — Supabase auth will be wired here */
    setTimeout(() => setLoading(false), 1500);
  };

  /* ─── Input factory ─── */
  const Field = ({ id, label, type = 'text', placeholder }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label htmlFor={id} style={{ fontSize: '.825rem', fontWeight: 600, color: C.muted, letterSpacing: '.03em' }}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={type === 'password' ? 'current-password' : 'email'}
        placeholder={placeholder}
        value={form[id]}
        onChange={handleChange}
        className="login-input"
        style={{
          background: C.bg,
          border: `1px solid ${errors[id] ? C.error : C.borderMid}`,
          borderRadius: '10px',
          padding: '13px 16px',
          color: C.text,
          fontSize: '.95rem',
          width: '100%',
          fontFamily: 'inherit',
        }}
      />
      {errors[id] && (
        <span style={{ fontSize: '.78rem', color: C.error, marginTop: '2px' }}>
          {errors[id]}
        </span>
      )}
    </div>
  );

  return (
    <div style={{
      backgroundColor: C.bg, color: C.text, minHeight: '100vh',
      fontFamily: "'Inter', system-ui, sans-serif",
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'fixed', top: '-200px', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '700px', borderRadius: '50%',
        background: `radial-gradient(circle, rgba(91,141,238,.12) 0%, transparent 70%)`,
        animation: 'glowPulse 6s ease-in-out infinite', pointerEvents: 'none',
      }} />

      {/* Card */}
      <div className="login-card" style={{
        width: '100%', maxWidth: '440px',
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: '18px',
        padding: 'clamp(32px, 6vw, 48px)',
        position: 'relative', zIndex: 1,
      }}>
        {/* Brand */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{
            display: 'block', fontWeight: 900, fontSize: '1.6rem',
            letterSpacing: '.1em', marginBottom: '8px',
            background: `linear-gradient(135deg, ${C.accent1}, ${C.accent2})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            TUTLY
          </span>
          <h1 style={{ fontSize: '1.15rem', fontWeight: 700, color: C.text, marginBottom: '6px' }}>
            Iniciar Sesión
          </h1>
          <p style={{ fontSize: '.85rem', color: C.muted }}>
            Accede a tu cuenta para continuar
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Field id="email"    label="Correo electrónico" type="email"    placeholder="tu@correo.com" />
          <Field id="password" label="Contraseña"         type="password" placeholder="••••••••" />

          {/* Forgot password placeholder */}
          <div style={{ textAlign: 'right', marginTop: '-10px' }}>
            <span style={{ fontSize: '.8rem', color: C.accent1, cursor: 'pointer' }}>
              ¿Olvidaste tu contraseña?
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="login-submit"
            style={{
              padding: '14px',
              background: loading
                ? C.borderMid
                : `linear-gradient(135deg, ${C.accent1}, ${C.accent2})`,
              color: '#fff', fontWeight: 700, fontSize: '.95rem',
              border: 'none', borderRadius: '10px', cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit', letterSpacing: '.03em',
              boxShadow: loading ? 'none' : '0 4px 20px rgba(91,141,238,.28)',
            }}
          >
            {loading ? 'Verificando...' : 'Iniciar Sesión'}
          </button>
        </form>

        {/* Divider */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          margin: '24px 0', color: C.faint, fontSize: '.8rem',
        }}>
          <div style={{ flex: 1, height: '1px', background: C.border }} />
          o
          <div style={{ flex: 1, height: '1px', background: C.border }} />
        </div>

        {/* Back button */}
        <Link to="/" className="login-back" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
          padding: '13px',
          border: `1px solid ${C.borderMid}`,
          borderRadius: '10px',
          color: C.muted,
          textDecoration: 'none', fontWeight: 500, fontSize: '.9rem',
        }}>
          ← Regresar al inicio
        </Link>

      </div>

      {/* Footer note */}
      <p style={{ marginTop: '28px', fontSize: '.78rem', color: C.faint, textAlign: 'center' }}>
        © {new Date().getFullYear()} JOBM Tech ·{' '}
        <Link to="/privacidad" style={{ color: C.faint, textDecoration: 'underline' }}>
          Política de Privacidad
        </Link>
      </p>
    </div>
  );
}
