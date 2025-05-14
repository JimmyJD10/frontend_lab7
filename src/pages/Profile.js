import React, { useContext } from 'react';
import { AuthContext } from '../auth-context';

const Profile = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>ID:</strong> {auth.user}</li>
        <li className="list-group-item"><strong>Roles:</strong> {auth.roles.join(', ')}</li>
      </ul>
    </div>
  );
};

export default Profile;
