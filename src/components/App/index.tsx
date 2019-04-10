import React from 'react';
import messages from '../../messages';
import image from '../../images/me.jpg';
import instagram from '../../images/instagram.svg';
import mail from '../../images/email.svg';
import linkedin from '../../images/linkedin.svg';
import constants from '../../constants';
import './index.css';

const App = () => (
  <div className="app">
    <div className="container">
      <img className="profilePic" src={image} />
      <h1 className="title">
        {messages.INTRO}
        <span className="highlight">{messages.NAME}</span>
      </h1>
      <h3 className="subtitle">{messages.ROLE}</h3>
      <div className="social">
        <a target="_blank" href={constants.MAIL}>
          <img src={mail} />
        </a>
        <a target="_blank" href={constants.LINKEDIN}>
          <img src={linkedin} />
        </a>
        <a target="_blank" href={constants.INSTAGRAM}>
          <img src={instagram} />
        </a>
      </div>
    </div>
    <div className="warning">
      <p>{messages.WIP}</p>
      <p>{messages.CONTACT_ME}</p>
    </div>
  </div>
);

export default App;
