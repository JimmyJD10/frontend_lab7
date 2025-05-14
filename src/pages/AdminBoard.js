import React from 'react';

const AdminBoard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-danger">Admin Board</h2>
      <p className="lead">Accesible sólo para usuarios con el rol de 'administrador'.</p>
    </div>
  );
};

export default AdminBoard;
