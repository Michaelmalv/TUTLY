import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing    from './Landing';
import Privacidad from './Privacidad';
import Login      from './Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<Landing />}    />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/login"      element={<Login />}      />
      </Routes>
    </BrowserRouter>
  );
}
