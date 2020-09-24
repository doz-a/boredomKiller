import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* top  */}

      <header className="App-header">
        <h1>
          Welcome to the Jungle
        </h1>
        <h3>
          COVID-19 Activity Generator
        </h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>

    Random Image
      <br></br>
        <br></br>

    Activity button
      </header>


      {/* bottom  */}
    </div>
  );
}

export default App;
