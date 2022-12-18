
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCFf3sVYu5TssI5DFuzWwoqiWks7DYYCe0",
    authDomain: "whatsapp-clone-b8997.firebaseapp.com",
    projectId: "whatsapp-clone-b8997",
    storageBucket: "whatsapp-clone-b8997.appspot.com",
    messagingSenderId: "264023584220",
    appId: "1:264023584220:web:2340d35e038d78c97ab319"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
