import {api} from '../lib/client';

export async function getRoles() {
    const response = await api.get('/roles');
    return response;
}

export async function getRoleById(id: string) {
    const response = await api.get(`/roles/${id}`);
    return response;
}

export async function createRole(data: any) {
    const response = await api.post('/roles', data);
    return response;
}

export async function updateRole(id: string, data: any) {
    const response = await api.put(`/roles/${id}`, data);
    return response;
}

export async function deleteRole(id: string) {
    const response = await api.delete(`/roles/${id}`);
    return response;
}

export async function assignRole(data: any) {
    const response = await api.post('/roles/assign', data);
    return response;
}

export async function revokeRole(data: any) {
    const response = await api.post('/roles/revoke', data);
    return response;
}

export async function getUserRoles(userId: string) {
    const response = await api.get(`/roles/user/${userId}`);
    return response;
} 