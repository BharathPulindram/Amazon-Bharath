import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQ0Nhk2rwWwuO0MDRtTE1D5wRjdxSZasg",
  authDomain: "bharath-f0aed.firebaseapp.com",
  databaseURL: "https://bharath-f0aed.firebaseio.com",
  projectId: "bharath-f0aed",
  storageBucket: "bharath-f0aed.appspot.com",
  messagingSenderId: "1031495910458",
  appId: "1:1031495910458:web:1b0c11770b3db84ad12103",
  measurementId: "G-RCG82QGEXZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
