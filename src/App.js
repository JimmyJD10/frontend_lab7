import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth-context';
import Navigation from './components/Navbar'; // Importa el Navbar que acabamos de crear
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AdminBoard from './pages/AdminBoard';
import ModeratorBoard from './pages/ModeratorBoard';
import UserBoard from './pages/UserBoard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigation /> {/* Coloca el Navbar aquí */}
        <Routes>
          <Route path="/" element={<UserBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          <Route path="/admin" element={<ProtectedRoute roles={['admin']} component={AdminBoard} />} />
          <Route path="/mod" element={<ProtectedRoute roles={['moderator']} component={ModeratorBoard} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
