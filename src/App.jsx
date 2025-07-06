import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/Layout';
import LoginPage from './pages/LoginPage.jsx';
import LogoutPage from './pages/LogoutPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

import './styles/App.css'
import SessionPage from './pages/SessionPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/' element={<Layout />}>
          <Route path="/sessions" element={<SessionPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings">
            <Route path="/account" element={<AccountPage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="/general" element={<GeneralPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/notifications" element={<NotificationPage />} />
          </Route>
      </Route>
    </Routes>
  )
}

export default App
