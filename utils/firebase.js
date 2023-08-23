import firebase from "firebase";

// firebase config
// TODO: move to env
const firebaseConfig = {
  apiKey: "AIzaSyAOUAxAthE6g1LzCoCJ7mLp87mS2StR7XQ",
  authDomain: "codemate-89830.firebaseapp.com",
  projectId: "codemate-89830",
  storageBucket: "codemate-89830.appspot.com",
  messagingSenderId: "183809749031",
  appId: "1:183809749031:web:543611b629040b4f43de02",
  measurementId: "G-RTDCBLX4NF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// using db and auth
const auth = firebase.auth;
const db = firebase.firestore();

export { db, auth };
