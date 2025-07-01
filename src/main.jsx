import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth.js'
import { AuthContext } from './contexts/authContext.js'

import './styles/index.css'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import LogoutPage from './pages/LogoutPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function AuthRequired() {
  const { token, loading } = useAuth();
  if (loading) return <div>Chargement...</div>;
  if (!token) return <Navigate to="/login" replace />;
  return <AuthContext.Provider value={{ token, loading }}><Outlet /></AuthContext.Provider>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/' element={<AuthRequired />}>
          <Route path="/home" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
