import { useState } from 'react';
import { registerUser } from '../services/userService';

export default function RegisterForm() {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const data = await registerUser({ lastname, firstname, email, password });
      if(data.success) {
        setSuccess(data.message);
        setLastname('');
        setFirstname('');
        setEmail('');
        setPassword('');
      } else {
        setError(data.error);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Prénom :</label>
        <input
          type="text"
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Mot de passe :</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Inscription..." : "S'inscrire"}
      </button>
      {error && <div>Erreur : {error}</div>}
      {success && <div>{success}</div>}
    </form>
  );
} 