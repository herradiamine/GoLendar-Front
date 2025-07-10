/**
 * Structure standard pour les réponses API
 */
export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    message: string | null;
    error: string | null;
}

import {AxiosError, AxiosResponse} from "axios";

/**
 * Formate une réponse API selon le standard
 * @param response - Réponse brute de l'API
 * @returns ApiResponse
 */
export function handleApiResponse(response: any): ApiResponse {
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
 * @param error - Réponse brute d'Axios
 * @returns ApiResponse
 */
export function handleApiResponseError(error: AxiosError): ApiResponse {
    const api_error: AxiosError|any = (error?.response) ? error.response : null;
    const api_error_response: AxiosResponse|any = (api_error?.data) ?? api_error.data;
    // Cas où l'API a répondu avec un message d'erreur structuré
    if (api_error_response) {
        return {
            success: false,
            data: api_error_response?.data,
            message: api_error_response?.message,
            error: api_error_response?.error || 'Erreur API'
        };
    }{

    // Cas d'erreur réseau ou autre erreur Axios
    if (api_error?.message)
        return {
            success: false,
            data: [],
            message: null,
            error: api_error.message
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