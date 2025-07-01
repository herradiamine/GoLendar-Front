export function handleApiResponse(response) {
  if (response.success) {
    return { data: response.data, message: response.message, error: null };
  } else {
    return { data: null, message: response.message, error: response.error || 'Erreur inconnue' };
  }
} 