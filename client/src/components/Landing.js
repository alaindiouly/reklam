import React from 'react';
import logo from '../assets/loud-speaker.png';

function Landing() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* <h1>reklam</h1> */}
      <h4
        style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '40px' }}
      >
        Get better feedback from your team
      </h4>
      <img
        src={logo}
        alt="reklam email automation"
        style={{ marginLeft: 'auto', marginRight: 'auto', width: '40vw' }}
      />
    </div>
  );
}

export default Landing;
