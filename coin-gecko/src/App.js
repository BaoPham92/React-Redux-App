import React from 'react';
import logo from './logo.svg';
import './App.css';

// * COMPONENTS
import Display from './components/Display'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Display />
    </div>
  );
}

export default App;
