import './aliases';

import { webApi as _webApi } from './express/express.main';

// INFO - Want to add more API calls?
// Copy express/api/v1/template and rename it to your new API endpoint.
// Rename all files within this new folder to match your new API endpoint.
// Rename "all" of the variables inside. Even the word "template" inside strings.
// If your IDE hasn't automatically done this for you, rename the imports too.
// Add your new API endpoint to both the v1.config.ts and v1.main.ts files.

// You are free to delete unused CRUD operations.
// You are also free to delete any CIAO files that are unused.
// The template is not strict. It's just to help you get started.

// All done, your API can now be reached at {{url}}/api/v1/{{endpoint}}


export const webApi = _webApi;
