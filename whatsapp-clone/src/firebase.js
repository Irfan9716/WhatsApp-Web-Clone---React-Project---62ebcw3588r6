import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdL9a6fFLf6kay0Qwt4KJukh0mmM1cPOE",
  authDomain: "whatsapp-clone-e898d.firebaseapp.com",
  projectId: "whatsapp-clone-e898d",
  storageBucket: "whatsapp-clone-e898d.appspot.com",
  messagingSenderId: "724462663784",
  appId: "1:724462663784:web:1575330c04883e673b63dd",
  measurementId: "G-EZV1YQXH4E"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
