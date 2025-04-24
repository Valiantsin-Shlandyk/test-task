import React, { useContext, useState } from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

const fakeAdmin = { username: 'admin', password: 'password' };

function Login() {
  const { auth, setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === fakeAdmin.username && password === fakeAdmin.password) {
      setAuth(true);
      navigate("/");
    } else {
      alert('Неверный логин или пароль');
    }
  };

  return (
    (!auth && <Paper sx={{ p: 4, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6">Вход</Typography>
      <TextField label="Логин" fullWidth margin="normal" value={username} onChange={e => setUsername(DOMPurify.sanitize(e.target.value))} />
      <TextField label="Пароль" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(DOMPurify.sanitize(e.target.value))} />
      <Button variant="contained" fullWidth onClick={handleLogin}>Войти</Button>
    </Paper>)
  );
}

export default Login;