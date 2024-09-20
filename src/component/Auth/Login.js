import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const [record, setRecord] = useState({ username: '', password: '' });
  const { login } = useAuth();

  const handleLogin = () => {
    login(record);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={record.username}
        onChange={(e) => setRecord({ ...record, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={record.password}
        onChange={(e) => setRecord({ ...record, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
