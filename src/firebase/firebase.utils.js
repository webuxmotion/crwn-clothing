import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDHzVex86WwpP3poYJLQqR2InmBOjLoBqU",
  authDomain: "crwn-db-eb368.firebaseapp.com",
  databaseURL: "https://crwn-db-eb368.firebaseio.com",
  projectId: "crwn-db-eb368",
  storageBucket: "crwn-db-eb368.appspot.com",
  messagingSenderId: "600106491595",
  appId: "1:600106491595:web:4117035ea7576f920dc54e",
  measurementId: "G-FEK5HGZ5FC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
