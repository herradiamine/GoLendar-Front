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
  const api_response = response.data;
  return {
    success: api_response.success ?? false,
    data: api_response.data ?? [],
    message: api_response.message ?? null,
    error: api_response.error ?? null
  };
}

/**
 * Formate une erreur API de type Axios en une ApiResponse standard
 * @param {AxiosError} error - Réponse brute d'Axios
 * @returns {ApiResponse}
 */
export function handleApiResponseError(error) {
  console.log("Error :");
  console.log(error);
  const api_error = error.data;
  // Cas où l'API a répondu avec un message d'erreur structuré
  if (api_error && api_error.data) {
    return {
      success: false,
      data: [],
      message: api_error.data.message || null,
      error: api_error.data.error || api_error.message || 'Erreur API'
    };
  }

  // Cas d'erreur réseau ou autre erreur Axios
  if (response.message) {
    return {
      success: false,
      data: [],
      message: null,
      error: response.message
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