import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth-context';

const ProtectedRoute = ({ component: Component, roles = [] }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  if (roles.length && !roles.some(role => auth.roles.includes(role))) {
    return <Navigate to="/access-denied" />;
  }

  return <Component />;
};

export default ProtectedRoute;
