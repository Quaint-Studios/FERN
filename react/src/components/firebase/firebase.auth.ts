import { auth } from 'firebase/app';
import 'firebase/auth';
import { getGoogleProvider } from './firebase.providers';

export interface ILoginResponse {
  token: string;
  user: firebase.User;
}

const providers = {
  googleProvider: getGoogleProvider()
};

export const login = async () => {
  const credentials = await auth().signInWithPopup(providers.googleProvider);

  const user = credentials.user;

  if (user !== null) {
    const token = await user.getIdToken();

    return { token, user };
  } else {
    throw new Error('Google User Auth Error: Firebase User is null.');
  }
};

export const logout = () =>
  auth()
    .signOut()
    .then(() => {
      console.log('Google User signed out successfully.');
    })
    .catch((err) => {
      console.error('Google User Signout Error:' + err);
    });
