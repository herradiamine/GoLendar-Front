import { ERROR_MESSAGES } from '../constants/messages';
import { handleApiResponse } from '../utils/apiResponse';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Inscription d'un nouvel utilisateur
export async function registerUser({ lastname, firstname, email, password }) {
  let data;
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lastname, firstname, email, password })
    });
    data = await response.json();
  } catch (e) {
    return { data: null, message: null, error: ERROR_MESSAGES.technical };
  }
  return handleApiResponse(data);
} 