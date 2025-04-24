import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
            <AppHeader />
            <Container sx={{ mt: 4 }}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              </Routes>
            </Container>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
