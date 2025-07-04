/**
 * Structure standard pour les réponses API
 * @template T - Type des données retournées
 * @typedef {Object} ApiResponse
 * @property {boolean} success - Indique si la requête a réussi
 * @property {T|null} data - Les données retournées par l'API
 * @property {string|null} message - Message informatif (optionnel)
 * @property {string|null} error - Message d'erreur (optionnel)
 */

import { AxiosError } from "axios";

/**
 * Formate une réponse API selon le standard
 * @param {any} response - Réponse brute de l'API
 * @returns {ApiResponse}
 */
export function handleApiResponse(response) {
  return {
    success: response.success || false,
    data: response.data ?? [],
    message: response.message || null,
    error: response.error || null
  };
}

/**
 * Formate une erreur API de type Axios en une ApiResponse standard
 * @param {AxiosError} error - Réponse brute d'Axios
 * @returns {ApiResponse}
 */
export function handleApiResponseError(error) {
  // Cas où l'API a répondu avec un message d'erreur structuré
  if (error.response && error.response.data) {
    return {
      success: false,
      data: [],
      message: error.response.data.message || null,
      error: error.response.data.error || error.message || 'Erreur API'
    };
  }

  // Cas d'erreur réseau ou autre erreur Axios
  if (error.message) {
    return {
      success: false,
      data: [],
      message: null,
      error: error.message
    };
  }

  // Cas très rare : erreur inconnue
  return {
    success: false,
    data: [],
    message: null,
    error: 'Erreur inconnue'
  };
}