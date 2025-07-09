import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { handleApiResponse, handleApiResponseError, ApiResponse } from '@/utils/apiResponse';

// Configuration de base
const BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Création de l'instance Axios
const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export function getAuthHeaders(): Record<string, string> {
    const session_token = localStorage.getItem('session_token');
    return session_token ? {Authorization: 'Bearer ' + session_token} : {};
}

export function withAuth(config: AxiosRequestConfig = {}): AxiosRequestConfig {
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
    get: async (url: string, config: AxiosRequestConfig = {}, requireAuth: boolean = false): Promise<ApiResponse> => {
        try {
            const response: AxiosResponse = await apiClient.get(url, (requireAuth) ? withAuth(config) : config);
            return handleApiResponse(response);
        } catch (error: unknown) {
            return handleApiResponseError(error as AxiosError);
        }
    },

    // POST
    post: async (url: string, data: any = {}, config: AxiosRequestConfig = {}, requireAuth: boolean = false): Promise<ApiResponse> => {
        try {
            const response: AxiosResponse = await apiClient.post(url, data, (requireAuth) ? withAuth(config) : config);
            return handleApiResponse(response);
        } catch (error: unknown) {
            return handleApiResponseError(error as AxiosError);
        }
    },

    // PUT
    put: async (url: string, data: any = {}, config: AxiosRequestConfig = {}, requireAuth: boolean = false): Promise<ApiResponse> => {
        try {
            const response: AxiosResponse = await apiClient.put(url, data, (requireAuth) ? withAuth(config) : config);
            return handleApiResponse(response);
        } catch (error: unknown) {
            return handleApiResponseError(error as AxiosError);
        }
    },

    // PATCH
    patch: async (url: string, data: any = {}, config: AxiosRequestConfig = {}, requireAuth: boolean = false): Promise<ApiResponse> => {
        try {
            const response: AxiosResponse = await apiClient.patch(url, data, (requireAuth) ? withAuth(config) : config);
            return handleApiResponse(response);
        } catch (error: unknown) {
            return handleApiResponseError(error as AxiosError);
        }
    },

    // DELETE
    delete: async (url: string, config: AxiosRequestConfig = {}, requireAuth: boolean = false): Promise<ApiResponse> => {
        try {
            const response: AxiosResponse = await apiClient.delete(url, (requireAuth) ? withAuth(config) : config);
            return handleApiResponse(response);
        } catch (error: unknown) {
            return handleApiResponseError(error as AxiosError);
        }
    }
};

export default apiClient; 