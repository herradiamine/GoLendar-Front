import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function LogoutPage() {
  const { logout } = useAuth();
  const [message, setMessage] = useState('Déconnexion en cours...');
  const [error, setError] = useState(null);

  useEffect(() => {
    logout()
      .then((data) => {
        setMessage(data.message || 'Déconnexion réussie.');
      })
      .catch((e) => {
        setError(e.message || 'Erreur lors de la déconnexion.');
      });
  }, [logout]);

  return (
    <div>
      <h2>Déconnexion</h2>
      {error ? (
        <p style={{ color: 'red' }}>Erreur : {error}</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
} 