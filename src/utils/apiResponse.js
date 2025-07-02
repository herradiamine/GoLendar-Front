export function handleApiResponse(response) {
  if (response.success) {
    return {
      success: response.success,
      data: response.data,
      message: response.message,
      error: response.error
    };
  } else {
    return {
      success: response.success,
      data: null,
      message: response.message,
      error: response.error || 'Erreur inconnue'
    };
  }
} 