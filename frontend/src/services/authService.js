import api from '../api';

export const login = async (serviceNo, password) => {
  return api.post('/api/auth/login', { serviceNo, password });
};

export const register = async (data) => {
  return api.post('/api/auth/register', data);
};
