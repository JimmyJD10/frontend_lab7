import React from 'react';

const UserBoard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-success">User Board</h2>
      <p className="lead">Accesible sólo para usuarios con el rol de 'usuario'.</p>
    </div>
  );
};

export default UserBoard;
