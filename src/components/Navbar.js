import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth-context';
import './Navbar.css';  

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  const roles = auth && auth.roles ? auth.roles : [];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {auth && auth.user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                {roles.includes('admin') && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">Admin Board</Link>
                  </li>
                )}
                {roles.includes('moderator') && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/mod">Moderator Board</Link>
                  </li>
                )}
                <li className="nav-item">
                  <button className="btn btn-outline-light" onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
