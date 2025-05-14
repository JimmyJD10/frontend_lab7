import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';  

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, roles: [] });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);  
      console.log("Token decodificado al cargar la app:", decoded);  
      setAuth({ 
        user: decoded.username || decoded.id, 
        roles: decoded.roles || []  
      });
    }
  }, []);

  const login = (token) => {
    const decoded = jwtDecode(token);  
    console.log("Token decodificado al hacer login:", decoded); 
    localStorage.setItem('token', token);
    setAuth({ 
      user: decoded.username || decoded.id, 
      roles: decoded.roles || [] 
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ user: null, roles: [] });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
