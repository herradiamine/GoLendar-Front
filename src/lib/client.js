import axios from 'axios';
import { handleApiResponse, handleApiResponseError } from '../utils/apiResponse';

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

// Méthodes utilitaires pour les requêtes HTTP
export const api = {
  // GET
  get: async (url, config = {}) => {
    try {
      const response = await apiClient.get(url, config);
      return handleApiResponse(response);
    } catch (error) {
      return handleApiResponseError(error);
    }
  },

  // POST
  post: async (url, data = {}, config = {}) => {
    try {
      const response = await apiClient.post(url, data, config);
      return handleApiResponse(response);
    } catch (error) {
      return handleApiResponseError(error);
    }
  },

  // PUT
  put: async (url, data = {}, config = {}) => {
    try {
      const response = await apiClient.put(url, data, config);
      return handleApiResponse(response);
    } catch (error) {
      return handleApiResponseError(error);
    }
  },

  // PATCH
  patch: async (url, data = {}, config = {}) => {
    try {
      const response = await apiClient.patch(url, data, config);
      return handleApiResponse(response);
    } catch (error) {
      return handleApiResponseError(error);
    }
  },

  // DELETE
  delete: async (url, config = {}) => {
    try {
      const response = await apiClient.delete(url, config);
      return handleApiResponse(response);
    } catch (error) {
      return handleApiResponseError(error);
    }
  }
};

export default apiClient; 