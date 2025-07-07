import {api} from '../lib/client';

export async function createCalendar(data) {
    const response = await api.post('/calendar', data);
    return response;
}

export async function getCalendar(calendarId) {
    const response = await api.get(`/calendar/${calendarId}`);
    return response;
}

export async function updateCalendar(calendarId, data) {
    const response = await api.put(`/calendar/${calendarId}`, data);
    return response;
}

export async function deleteCalendar(calendarId) {
    const response = await api.delete(`/calendar/${calendarId}`);
    return response;
} 