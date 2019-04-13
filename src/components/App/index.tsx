import React from 'react';
import messages from '../../messages';
import './index.css';

const App = () => (
  <div className="app">
    <div className="container">
      <h1 className="title">
        {messages.INTRO}
      </h1>
    </div>
  </div>
);

export default App;
