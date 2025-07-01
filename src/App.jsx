import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from './services/authService';
import reactLogo from './assets/react.svg'
import golendarLogo from './assets/logo.svg'
import viteLogo from './assets/vite.svg'
import './styles/App.css'

function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const [logoutError, setLogoutError] = useState(null);

  const handleLogout = async () => {
    setLogoutSuccess(false);
    setLogoutError(null);
    const token = localStorage.getItem('token');
    try {
      await logout(token);
      setLogoutSuccess(true);
      localStorage.removeItem('token');
      navigate('/logout');
      // Tu peux aussi faire localStorage.removeItem('token') ici si tu veux
    } catch (e) {
      setLogoutError('Erreur lors de la déconnexion');
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="#" target="_blank">
          <img src={golendarLogo} className="logo golendar" alt="Golendar logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>
          Déconnexion
        </button>
        {logoutSuccess && <div>Déconnexion réussie.</div>}
        {logoutError && <div style={{color: 'red'}}>{logoutError}</div>}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
