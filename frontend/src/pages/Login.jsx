import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Button from '../components/Button';

const Login = () => {
  const { handleLogin } = useAuth();
  const [serviceNo, setServiceNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(serviceNo, password);
    navigate('/welcome');
  };

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 300, margin: '4rem auto' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Service No"
        value={serviceNo}
        onChange={e => setServiceNo(e.target.value)}
        required
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
