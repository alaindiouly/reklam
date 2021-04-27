import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth);

  function renderAuth() {
    switch (isLoggedIn) {
      // temporary state while fecthing data
      case null:
        return;
      case false:
        //TODO check href for GitHub login
        return (
          <div>
            <a href="/auth/google" style={{}}>
              Login With Google
            </a>
            <a href="/auth/github">Login With GitHub</a>
          </div>
        );
      default:
        // i.e. case true
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
        <div className="right">{renderAuth()}</div>
      </div>
    </nav>
  );
}

export default Header;
