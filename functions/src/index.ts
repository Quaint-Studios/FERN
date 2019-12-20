import './aliases';

import { webApi } from './express/express.main';
import functions from './functions/functions.main';

// INFO - Want to add more API calls?
// More info in the README.

exports['webApi'] = webApi; // Express API

// All functions 
functions.forEach((func, name) => {
  exports[name] = func;
});
