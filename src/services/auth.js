import { api } from '../lib/client';

// Connexion utilisateur
export async function login(data) {
  const response = await api.post('/auth/login', data);
  if (response.success) {
    localStorage.setItem('session_token', response.data.session_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
  }
  return response;
}

// Rafraîchissement de token
export async function refreshToken() {
  const refresh_token = localStorage.getItem('refresh_token');
  const data = (refresh_token) ? {refresh_token: refresh_token} : {};
  const response = await api.post('/auth/refresh', data, {}, true);
  return response;
}

// Déconnexion utilisateur
export async function logout() {
  const response = await api.post('/auth/logout', {}, {}, true);
  if (response.success) {
    localStorage.removeItem('session_token');
    localStorage.removeItem('refresh_token');
  }
  return response;
}

// Récupération du profil utilisateur connecté
export async function getProfile() {
  const response = await api.get('/auth/me', {}, true);
  return response;
}

export async function getSessions() {
  const response = await api.get('/auth/sessions', {}, true);
  return response;
}

export async function deleteSession(sessionId) {
  const response = await api.delete(`/auth/sessions/${sessionId}`, {}, true);
  return response;
}