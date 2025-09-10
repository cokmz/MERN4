import React, { useState } from 'react';
import { register } from '../services/authService';
import Button from '../components/Button';

const Register = () => {
  const [serviceNo, setServiceNo] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('sailor');

  const onSubmit = async (e) => {
    e.preventDefault();
    await register({ serviceNo, password, role });
    // Optionally redirect or show success message
  };

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 300, margin: '4rem auto' }}>
      <h2>Register</h2>
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
      <select value={role} onChange={e => setRole(e.target.value)} style={{ width: '100%', marginBottom: '1rem' }}>
        <option value="sailor">Sailor</option>
        <option value="officer">Officer</option>
        <option value="admin">Admin</option>
        <option value="co">CO</option>
        <option value="ro">RO</option>
        <option value="go">GO</option>
        <option value="do">DO</option>
      </select>
      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;
