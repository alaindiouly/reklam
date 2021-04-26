import React from 'react';
import logo from '../assets/rocket.svg';

function Landing() {
  return (
    <div className="center-align">
      <h1>reklam</h1>
      <b>Get better feedback from your team</b>
      <img
        className="center-align"
        src={logo}
        alt="reklam email automation"
        style={{ margin: '40px', width: '50vw' }}
      />
    </div>
  );
}

export default Landing;
