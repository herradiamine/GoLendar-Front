import { ERROR_MESSAGES } from '../constants/messages';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Inscription d'un nouvel utilisateur
export async function registerUser({ lastname, firstname, email, password }) {
  const response = await fetch(`${BASE_URL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lastname, firstname, email, password })
  });
  if (!response.ok) {
    let errorMsg = "Erreur d'inscription";
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