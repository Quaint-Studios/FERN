import React from 'react';

import logo from './logo.svg';

import './App.css';

import {
  ActionType as themeAction,
  useThemeValue
} from './components/contexts/data/Theme';

function App() {
  const [theme, setTheme] = useThemeValue();

  const toggleTheme = () => {
    setTheme({ type: themeAction.TOGGLE });
  };

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Change theme!</button>
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    </div>
  );
}

export default App;
