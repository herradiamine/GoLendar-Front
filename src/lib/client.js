import axios from 'axios';
import { handleApiResponse, handleApiResponseError } from '@/utils/apiResponse';

// Configuration de base
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Création de l'instance Axios
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function getAuthHeaders() {
  const session_token = localStorage.getItem('session_token');
  return session_token ? { Authorization: 'Bearer ' + session_token } : {};
}

export function withAuth(config = {}) {
  return {
    ...config,
    headers: {
      ...getAuthHeaders(),
      ...(config.headers || {})
    }
  };
}

// Méthodes utilitaires pour les requêtes HTTP
export const api = {
  // GET
  get: async (url, config = {}, requireAuth = false) => {
    try {
      const response = await apiClient.get(url, (requireAuth) ? withAuth(config) : config);
      return handleApiResponse(response);
    } catch (error) {
      return handleApiResponseError(error);
    }
  },

  // POST
  post: async (url, data = {}, config = {}, requireAuth = false) => {
    try {
      const response = await apiClient.post(url, data, (requireAuth) ? withAuth(config) : config);
      return handleApiResponse(response);
    } catch (error) {
      return handleApiResponseError(error);
    }
  },

  // PUT
  put: async (url, data = {}, config = {}, requireAuth = false) => {
    try {
      const response = await apiClient.put(url, data, (requireAuth) ? withAuth(config) : config);
      return handleApiResponse(response);
    } catch (error) {
      return handleApiResponseError(error);
    }
  },

  // PATCH
  patch: async (url, data = {}, config = {}, requireAuth = false) => {
    try {
      const response = await apiClient.patch(url, data, (requireAuth) ? withAuth(config) : config);
      return handleApiResponse(response);
    } catch (error) {
      return handleApiResponseError(error);
    }
  },

  // DELETE
  delete: async (url, config = {}, requireAuth = false) => {
    try {
      const response = await apiClient.delete(url, (requireAuth) ? withAuth(config) : config);
      return handleApiResponse(response);
    } catch (error) {
      return handleApiResponseError(error);
    }
  }
};

export default apiClient; 