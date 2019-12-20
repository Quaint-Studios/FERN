// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import './components/firebase/firebase.main';

// Resources
import './index.css';

// Components
import App from './App';
import AppContexts from './components/contexts/AppContexts';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppContexts>
    <App />
  </AppContexts>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
