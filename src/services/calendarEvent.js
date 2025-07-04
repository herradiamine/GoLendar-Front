import { api } from '../lib/client';

export async function getEvent(calendarId, eventId) {
  const response = await api.get(`/calendar-event/${calendarId}/${eventId}`);
  return response;
}

export async function getEventsByMonth(calendarId, year, month) {
  const response = await api.get(`/calendar-event/${calendarId}/month/${year}/${month}`);
  return response;
}

export async function getEventsByWeek(calendarId, year, week) {
  const response = await api.get(`/calendar-event/${calendarId}/week/${year}/${week}`);
  return response;
}

export async function getEventsByDay(calendarId, year, month, day) {
  const response = await api.get(`/calendar-event/${calendarId}/day/${year}/${month}/${day}`);
  return response;
}

export async function createEvent(calendarId, data) {
  const response = await api.post(`/calendar-event/${calendarId}`, data);
  return response;
}

export async function updateEvent(calendarId, eventId, data) {
  const response = await api.put(`/calendar-event/${calendarId}/${eventId}`, data);
  return response;
}

export async function deleteEvent(calendarId, eventId) {
  const response = await api.delete(`/calendar-event/${calendarId}/${eventId}`);
  return response;
} 