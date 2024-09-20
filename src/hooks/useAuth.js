import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (credentials) => {
    // Simulate authentication
    const token = "jwt-token";
    localStorage.setItem("authToken", token);
    setUser({ username: credentials.username });
    navigate('/');
  };

  const register = (details) => {
    // Simulate registration
    localStorage.setItem("user", JSON.stringify(details));
    navigate('/login');
  };

  return { user, login, register };
};
