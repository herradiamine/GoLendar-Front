import { ERROR_MESSAGES } from '../constants/messages';
import { handleApiResponse } from '../utils/apiResponse';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Connexion utilisateur
export async function login(email, password) {
  let data;
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    data = await response.json();
  } catch (e) {
    return { data: null, message: null, error: ERROR_MESSAGES.technical };
  }
  return handleApiResponse(data);
}

// Rafraîchissement de token
export async function refreshToken(refresh_token) {
  let data;
  try {
    const response = await fetch(`${BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token })
    });
    data = await response.json();
  } catch (e) {
    return { data: null, message: null, error: ERROR_MESSAGES.technical };
  }
  return handleApiResponse(data);
}

// Déconnexion utilisateur
export async function logout(token) {
  let data;
  try {
    console.log(token)
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    data = await response.json();
  } catch (e) {
    return { data: null, message: null, error: ERROR_MESSAGES.technical };
  }
  return handleApiResponse(data);
}

// Récupération du profil utilisateur connecté
export async function getProfile(token) {
  let data;
  try {
    const response = await fetch(`${BASE_URL}/auth/me`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    data = await response.json();
  } catch (e) {
    return { data: null, message: null, error: ERROR_MESSAGES.technical };
  }
  return handleApiResponse(data);
} 