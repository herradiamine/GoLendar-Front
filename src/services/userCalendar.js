import { api } from '../lib/client';

export async function getUserCalendar(userId, calendarId) {
  const response = await api.get(`/user-calendar/${userId}/${calendarId}`);
  return response;
}

export async function getUserCalendars(userId) {
  const response = await api.get(`/user-calendar/${userId}`);
  return response;
}

export async function createUserCalendar(userId, calendarId, data) {
  const response = await api.post(`/user-calendar/${userId}/${calendarId}`, data);
  return response;
}

export async function updateUserCalendar(userId, calendarId, data) {
  const response = await api.put(`/user-calendar/${userId}/${calendarId}`, data);
  return response;
}

export async function deleteUserCalendar(userId, calendarId) {
  const response = await api.delete(`/user-calendar/${userId}/${calendarId}`);
  return response;
} 