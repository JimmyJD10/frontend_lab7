import React from 'react';

const ModeratorBoard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-info">Moderator Board</h2>
      <p className="lead">Accesible sólo para usuarios con el rol de 'moderador'.</p>
    </div>
  );
};

export default ModeratorBoard;
