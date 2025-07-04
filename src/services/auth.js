import { api } from '../lib/client';

// Connexion utilisateur
export async function login(data) {
  const response = await api.post('/auth/login', data);
  return response;
}

// Rafraîchissement de token
export async function refreshToken(data) {
  const response = await api.post('/auth/refresh', data);
  return response;
}

// Déconnexion utilisateur
export async function logout() {
  const response = await api.post('/auth/logout');
  return response;
}

// Récupération du profil utilisateur connecté
export async function getProfile() {
  const response = await api.get('/auth/me');
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