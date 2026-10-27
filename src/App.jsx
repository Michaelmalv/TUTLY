import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing    from './Landing';
import Login      from './Login';
import Privacidad from './Privacidad';
import Terminos   from './Terminos';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<Landing />}    />
        <Route path="/login"      element={<Login />}      />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos"   element={<Terminos />}   />
      </Routes>
    </BrowserRouter>
  );
}
