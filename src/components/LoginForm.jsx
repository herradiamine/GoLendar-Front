import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Card from './ui/Card';
import Input from './ui/Input';
import Button from './ui/Button';

export default function LoginForm() {
  const navigate = useNavigate();
  const { login, loading, error, success } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      if (data.success) {
        navigate('/home');
      }
    } catch (e) {}
  };

  return (
    <Card style={{ maxWidth: 400, margin: '2em auto' }}>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          label="Mot de passe"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Connexion...' : 'Se connecter'}
        </Button>
        {error && <div style={{ color: 'red', marginTop: '1em' }}>Erreur : {error}</div>}
        {success && <div style={{ color: 'green', marginTop: '1em' }}>Connexion réussie !</div>}
      </form>
    </Card>
  );
} 