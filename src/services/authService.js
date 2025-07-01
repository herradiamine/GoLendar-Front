import { ERROR_MESSAGES } from '../constants/messages';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Connexion utilisateur
export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!response.ok) {
    let errorMsg = ERROR_MESSAGES.login;
    try {
      const data = await response.json();
      errorMsg = data?.error || errorMsg;
    } catch (e) {
      errorMsg = ERROR_MESSAGES.technical;
    }
    const error = new Error(errorMsg);
    error.response = response;
    throw error;
  }
  return response.json();
}

// Rafraîchissement de token
export async function refreshToken(refresh_token) {
  const response = await fetch(`${BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh_token })
  });
  if (!response.ok) {
    let errorMsg = ERROR_MESSAGES.refresh;
    try {
      const data = await response.json();
      errorMsg = data?.error || errorMsg;
    } catch (e) {
      errorMsg = ERROR_MESSAGES.technical;
    }
    const error = new Error(errorMsg);
    error.response = response;
    throw error;
  }
  return response.json();
}

// Déconnexion utilisateur
export async function logout(token) {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!response.ok) {
    let errorMsg = ERROR_MESSAGES.logout;
    try {
      const data = await response.json();
      errorMsg = data?.error || errorMsg;
    } catch (e) {
      errorMsg = ERROR_MESSAGES.technical;
    }
    const error = new Error(errorMsg);
    error.response = response;
    throw error;
  }
  return response.json();
}

// Récupération du profil utilisateur connecté
export async function getProfile(token) {
  const response = await fetch(`${BASE_URL}/auth/me`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!response.ok) {
    let errorMsg = ERROR_MESSAGES.profile;
    try {
      const data = await response.json();
      errorMsg = data?.error || errorMsg;
    } catch (e) {
      errorMsg = ERROR_MESSAGES.technical;
    }
    const error = new Error(errorMsg);
    error.response = response;
    throw error;
  }
  return response.json();
} 