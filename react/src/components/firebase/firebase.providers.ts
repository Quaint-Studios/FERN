import { auth } from 'firebase/app';
import 'firebase/auth';

/**
 * Google Provider
 */
export function getGoogleProvider() {
  const provider = new auth.GoogleAuthProvider();

  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

  auth().useDeviceLanguage();

  provider.setCustomParameters({
    login_hint: 'user@example.com'
  });

  return provider;
}
