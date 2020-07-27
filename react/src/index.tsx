// Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Resources
import './_styles/index.scss';

// Components
import App from '@components/App';
import AppContexts from '@components/contexts/AppContexts';

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