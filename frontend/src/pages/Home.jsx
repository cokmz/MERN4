import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>Welcome to MERN4</h1>
      <Button onClick={() => navigate('/login')}>Login</Button>
      <Button onClick={() => navigate('/register')} style={{ marginLeft: '1rem' }}>Register</Button>
    </div>
  );
};

export default Home;
