import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBy3YzoTTZHtU7NBHgmpTEFLhYwDlVnb_A",
  authDomain: "react--clone-4af29.firebaseapp.com",
  projectId: "react--clone-4af29",
  storageBucket: "react--clone-4af29.appspot.com",
  messagingSenderId: "888828084927",
  appId: "1:888828084927:web:9cf9497871394fcd70fc0a",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
db.settings({
  timestampsInSanpshots: true,
});

export { db, auth };
