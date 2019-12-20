# FERN
**[Firebase](https://firebase.google.com/) • [Express](https://expressjs.com/) • [React](https://reactjs.org/) • [NodeJS](https://nodejs.org/)**

## Getting Started

### Config
#### Firebase
`./firebaserc` contains the default package ID for your Firebase App. This should be changed before proceeding.

`./react/src/components/firebase/firebase.config.json` is your firebase SDK config. You can find this information by going to your project's settings, scrolling down, and clicking *config*.

#### React Global Hooks
`./react/src/components/contexts/` - The *data* folder holds individual contexts. You can use both the Theme and Nav contexts as an example for creating more contexts. The Theme context shows an example of a single-value being stored. The Nav context shows an example of an object with properties. Just copy and change the values accordingly. You can also configure the `reducer` at the bottom to match your needs.

#### Functions API
`./functions/src/express/api/` To add a new API endpoint, follow the instructions below:
- Copy express/api/v1/template and rename it to your new API endpoint.
- Rename all files within this new folder to match your new API endpoint.
- Rename "all" of the variables inside. Even the word "template" inside strings.
- If your IDE hasn't automatically done this for you, rename the imports too.
- Add your new API endpoint to both the v1.config.ts and v1.main.ts files.

You are free to delete unused CRUD operations. You are also free to delete any CIAO files that are unused. The template is not strict. It's just to help you get started.

All done, your API can now be reached at `{{url}}/api/v1/{{endpoint}}`


### Install
`npm run install`: Runs the install script for the root package and the packages belonging to both the react and functions folders.

### Build
`npm run buildAll`: Runs the build script for both the react and functions folders.

### Run Locally
`npm run watchServer`: This start a local emulator for firebase.

It hosts the client (7000), functions (7002), firestore (7004), and pubsub (7006). The numbers in parenthesis are the ports.

Changing files in the functions/src folder will automatically recompile them.

---

`npm run watchClient`: This will watch the react/src folder using @craco/craco.

Changing files in this folder will automatically recompile them.

### Test

`npm run testClient` will run `craco test` with jest and a few other tools. The config file and tests are under the react folder.

`npm run testServer` will run `jest` and load a separate config file in the functions folder.

Both react and functions have template tests within them to get started. There's no definitive structure yet. This is open to suggestions.

### Deploy

`npm run deploy`: Always remember that you require access to the Firebase project linked to whatever project this is setup with. You can always create your own and change the project name inside of .firebaserc.

If you have access to the Firebase project, or your own, this command will call `firebase deploy` and send the functions/lib & react/build folders to firebase for deployment. This means that they must already be built. It does *not* build it for you.

If you do not have access to the Firebase project, and would like to make your own, go to https://firebase.com and create one. You'll get information on how to login via the CLI. Be sure to setup your Hosting / Storage settings on the website. ***This can only be done once for this project if you're on a free-tier.*** You only need to set your server region and you're ready to go!

### How can I help?

#### Issues
Submitting any bugs you might find [here](https://github.com/Quaint-Studios/FERN/issues) is a good way to help. The same thing applies if you have any feedback or ideas. They're always welcome.

#### Pull Request
1. Fork
2. Clone
3. Branch
4. Push
5. Pull Request
6. Repeat

I'll try my best to keep review all of them. If not, I'll find some help eventually! :) Either that, or I'll improve on managing this project.
