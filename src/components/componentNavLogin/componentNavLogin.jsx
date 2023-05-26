import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './componentNavLogin.css';

export default function NavLogincomp() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUser(true);
    }
  }, []);

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <div className="Top">
      <div className="topleft">
        <img className="blogimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fqdeMQNyxNDLTL6lFqvxUNzSL2gLw0fWH8Gv9zLU&s" alt="" />
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/settings">SETTING</Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="toplistitem" onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
    </div>
  );
}
