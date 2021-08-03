import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDeh0JqiZZ0vlqFHoCUOEyeQn2GgzDS03Y",
  authDomain: "challenge-42eb8.firebaseapp.com",
  projectId: "challenge-42eb8",
  storageBucket: "challenge-42eb8.appspot.com",
  messagingSenderId: "675410887603",
  appId: "1:675410887603:web:8961f31c7c8d57568841c6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };