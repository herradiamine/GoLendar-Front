import {api} from '../lib/client';

// Inscription d'un nouvel utilisateur
export async function registerUser(data) {
    const response = await api.post('/user', data);
    return response;
}

export async function getMyProfile() {
    const response = await api.get('/user/me');
    return response;
}

export async function updateMyProfile(data) {
    const response = await api.put('/user/me', data);
    return response;
}

export async function deleteMyAccount() {
    const response = await api.delete('/user/me');
    return response;
}

export async function getUserById(userId) {
    const response = await api.get(`/user/${userId}`);
    return response;
}

export async function updateUserById(userId, data) {
    const response = await api.put(`/user/${userId}`, data);
    return response;
}

export async function deleteUserById(userId) {
    const response = await api.delete(`/user/${userId}`);
    return response;
}

export async function getUserWithRoles(userId) {
    const response = await api.get(`/user/${userId}/with-roles`);
    return response;
}