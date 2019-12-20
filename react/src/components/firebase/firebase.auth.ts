import firebase from 'firebase';

export const login = async () => {
  try {
    const auth = firebase.auth;

    const provider = new auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

    auth().useDeviceLanguage();

    provider.setCustomParameters({
      login_hint: 'user@example.com'
    });

    const credentials = await auth().signInWithPopup(provider);

    const user = credentials.user;

    if (user !== null) {
      const { getIdToken: token } = user;

      console.log(token, user);
    } else {
      throw new Error('Firebase User is null.');
    }
  } catch (err) {
    console.log('Google User Auth Error:' + err);
  }
};

export const logout = () => null;
