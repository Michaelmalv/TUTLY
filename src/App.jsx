import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Privacidad from './Privacidad';

function Login() {
  const styles = {
    page: {
      backgroundColor: '#121212',
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '800',
      color: '#4facfe',
      margin: 0,
    },
    sub: {
      color: '#8892a4',
      margin: 0,
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Iniciar Sesión</h1>
      <p style={styles.sub}>Próximamente disponible · TUTLY</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
