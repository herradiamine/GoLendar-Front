import {api} from '../lib/client';

export async function createCalendar(data: any) {
    const response = await api.post('/calendar', data);
    return response;
}

export async function getCalendar(calendarId: string) {
    const response = await api.get(`/calendar/${calendarId}`);
    return response;
}

export async function updateCalendar(calendarId: string, data: any) {
    const response = await api.put(`/calendar/${calendarId}`, data);
    return response;
}

export async function deleteCalendar(calendarId: string) {
    const response = await api.delete(`/calendar/${calendarId}`);
    return response;
} 