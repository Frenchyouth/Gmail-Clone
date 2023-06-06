import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVGncVJuJ0GNiW1H3qIqhjNDCO_kNxHms",
  authDomain: "fir-3fe04.firebaseapp.com",
  projectId: "fir-3fe04",
  storageBucket: "fir-3fe04.appspot.com",
  messagingSenderId: "718067683010",
  appId: "1:718067683010:web:ffcc48e9b245fc8a4d355b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
