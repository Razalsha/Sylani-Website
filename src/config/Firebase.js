// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmALI-Q2YV96ZNXr7SYOzV17SAfrIEQDo",
  authDomain: "student01-bc312.firebaseapp.com",
  projectId: "student01-bc312",
  storageBucket: "student01-bc312.firebasestorage.app",
  messagingSenderId: "571177542103",
  appId: "1:571177542103:web:c422da0059748b7b82ab92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
