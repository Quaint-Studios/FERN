# FERN
**[Firebase](https://firebase.google.com/) • [Express](https://expressjs.com/) • [React](https://reactjs.org/) • [NodeJS](https://nodejs.org/)**

## Getting Started

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
