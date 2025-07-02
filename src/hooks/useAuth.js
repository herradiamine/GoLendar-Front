import { useState, useEffect, useCallback } from 'react';
import { login as apiLogin, logout as apiLogout, getProfile } from '../services/authService';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Récupère le profil utilisateur si token présent
  useEffect(() => {
    if (token) {
      setLoading(true);
      getProfile(token)
        .then(setUser)
        .catch(() => {
          setUser(null);
          setToken(null);
          localStorage.removeItem('token');
        })
        .finally(() => setLoading(false));
    } else {
      setUser(null);
    }
  }, [token]);

  // Connexion
  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const data = await apiLogin(email, password);
      if (data.success) {
        setToken(data.token);
        localStorage.setItem('token', data.data.session_token);
        setUser(data.user);
      } else {
        setError(data.error);
      }
      setSuccess(data.success);
      return data;
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, []);

  // Déconnexion
  const logout = useCallback(async () => {
    if (token) {
      try {
        await apiLogout(token);
      } catch {}
    }
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  }, [token]);

  return { user, token, loading, error, success, login, logout };
} 