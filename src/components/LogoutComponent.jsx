import { useEffect, useState } from 'react';
import { logout } from '../services/authService';

export default function LogoutComponent() {
  const [success, setSuccess] = useState(false);

  const handleLogout = async (e) => {
    const token = localStorage.getItem('token');
    logout(token).finally(() => {
        setSuccess(true);
        localStorage.removeItem('token');
    });
  }

  useEffect(() => {
    handleLogout();
  }, []);

  return <div>{success ? "Déconnexion réussie." : "Déconnexion en cours..."}</div>;
}