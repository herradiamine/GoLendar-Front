import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth.js'
import { AuthContext } from './contexts/authContext.js'

import './styles/index.css'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LogoutPage from './pages/LogoutPage.jsx'

function AuthRequired({ children }) {
  const { token, loading } = useAuth();
  if (loading) return <div>Chargement...</div>;
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<AuthRequired />}>
          <Route path="/home" element={<App />} /> 
          <Route path="/logout" element={<LogoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
