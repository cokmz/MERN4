import React, { createContext, useState, useEffect } from 'react';
import { login } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      setUser({ token });
    } else {
      setUser(null);
    }
  }, [token]);

  const handleLogin = async (serviceNo, password) => {
    const res = await login(serviceNo, password);
    setToken(res.data.token);
    localStorage.setItem('token', res.data.token);
    await setUser(res.data.user);
    await console.log(res.data.user)
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
