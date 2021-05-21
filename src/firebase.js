import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyDdMWZCmxnx2Ndgj01GXoehfGYqRd8lzNs",
  authDomain: "chatapp-139e0.firebaseapp.com",
  databaseURL: "https://chatapp-139e0.firebaseio.com",
  projectId: "chatapp-139e0",
  storageBucket: "chatapp-139e0.appspot.com",
  messagingSenderId: "296588554959",
  appId: "1:296588554959:web:a1653077ce982964abbdba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
