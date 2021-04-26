import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth);

  function renderAuth() {
    switch (isLoggedIn) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <React.Fragment>
            <li>
              <Payments />
            </li>
            <li style={{ margin: '0 10px' }}>Credits {isLoggedIn.credits} </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </React.Fragment>
        );
    }
  }

  return (
    <nav>
      <div className="nav-wrapper grey">
        {/* eslint-disable-next-line */}
        <Link
          to={isLoggedIn ? '/surveys' : '/'}
          className="brand-logo left"
          style={{ margin: '0 20px' }}
        >
          reklam
        </Link>
        <ul className="right">{renderAuth()}</ul>
      </div>
    </nav>
  );
}

export default Header;
