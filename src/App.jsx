/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import logo from './assets/Icon.png';
import namedLogo from '/horiWhite.png';
import './App.css';
import logyard from 'logyard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://www.logyard.io" target="_blank">
          <img src={namedLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.logyard.io" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Demo</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          logyard('info', 'State was Incremented', {count});
        }}>
          count is {count}
        </button>
        <p>
          Increment to send a log to the database!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more<br></br><br></br>
        Demo made using Vite + React
      </p>
    </>
  );
}

export default App;
