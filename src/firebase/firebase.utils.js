import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB7D7ZOUwWMQw-UyOxidA_u6AFfmvnLrBg",
  authDomain: "crwn-db-94a5b.firebaseapp.com",
  projectId: "crwn-db-94a5b",
  storageBucket: "crwn-db-94a5b.appspot.com",
  messagingSenderId: "494712191668",
  appId: "1:494712191668:web:52c16cd1d6ce7188c535e1",
  measurementId: "G-NYZG1W575B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
