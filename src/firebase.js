// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOND6YP4P2v73EdnaDgVB9VqCpdpUhfjU",
  authDomain: "trends-e9bc9.firebaseapp.com",
  projectId: "trends-e9bc9",
  storageBucket: "trends-e9bc9.firebasestorage.app",
  messagingSenderId: "133639379343",
  appId: "1:133639379343:web:8ec395aeda68b90b7353fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };