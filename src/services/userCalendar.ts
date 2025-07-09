import {api} from '../lib/client';

export async function getUserCalendar(userId: string, calendarId: string) {
    const response = await api.get(`/user-calendar/${userId}/${calendarId}`);
    return response;
}

export async function getUserCalendars(userId: string) {
    const response = await api.get(`/user-calendar/${userId}`);
    return response;
}

export async function createUserCalendar(userId: string, calendarId: string, data: any) {
    const response = await api.post(`/user-calendar/${userId}/${calendarId}`, data);
    return response;
}

export async function updateUserCalendar(userId: string, calendarId: string, data: any) {
    const response = await api.put(`/user-calendar/${userId}/${calendarId}`, data);
    return response;
}

export async function deleteUserCalendar(userId: string, calendarId: string) {
    const response = await api.delete(`/user-calendar/${userId}/${calendarId}`);
    return response;
} 