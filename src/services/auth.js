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
export async function refreshToken(data) {
  const response = await api.post('/auth/refresh', data);
  return response;
}

// Déconnexion utilisateur
export async function logout() {
  const session_token = localStorage.getItem('session_token');
  localStorage.removeItem('session_token');
  const response = await api.post('/auth/logout', null, {headers: {Authorization: 'Bearer '+session_token}});
  return response;
}

// Récupération du profil utilisateur connecté
export async function getProfile() {
  const session_token = localStorage.getItem('session_token');
  const response = await api.get('/auth/me', {headers: {Authorization: 'Bearer '+session_token}});
  return response;
}

export async function getSessions() {
  const response = await api.get('/auth/sessions');
  return response;
}

export async function deleteSession(sessionId) {
  const response = await api.delete(`/auth/sessions/${sessionId}`);
  return response;
}