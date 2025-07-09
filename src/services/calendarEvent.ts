import {api} from '../lib/client';

export async function getEvent(calendarId: string, eventId: string) {
    const response = await api.get(`/calendar-event/${calendarId}/${eventId}`);
    return response;
}

export async function getEventsByMonth(calendarId: string, year: number, month: number) {
    const response = await api.get(`/calendar-event/${calendarId}/month/${year}/${month}`);
    return response;
}

export async function getEventsByWeek(calendarId: string, year: number, week: number) {
    const response = await api.get(`/calendar-event/${calendarId}/week/${year}/${week}`);
    return response;
}

export async function getEventsByDay(calendarId: string, year: number, month: number, day: number) {
    const response = await api.get(`/calendar-event/${calendarId}/day/${year}/${month}/${day}`);
    return response;
}

export async function createEvent(calendarId: string, data: any) {
    const response = await api.post(`/calendar-event/${calendarId}`, data);
    return response;
}

export async function updateEvent(calendarId: string, eventId: string, data: any) {
    const response = await api.put(`/calendar-event/${calendarId}/${eventId}`, data);
    return response;
}

export async function deleteEvent(calendarId: string, eventId: string) {
    const response = await api.delete(`/calendar-event/${calendarId}/${eventId}`);
    return response;
} 