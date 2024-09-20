import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Register = () => {
  const [details, setDetails] = useState({ username: '', password: '' });
  const { register } = useAuth();

  const handleRegister = () => {
    register(details);
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={details.username}
        onChange={(e) => setDetails({ ...details, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={details.password}
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
