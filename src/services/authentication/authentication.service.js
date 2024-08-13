import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNwfWW108GnG19xWjNzc8BliU2RQki610",
  authDomain: "mealstogo-a4028.firebaseapp.com",
  projectId: "mealstogo-a4028",
  storageBucket: "mealstogo-a4028.appspot.com",
  messagingSenderId: "314069792316",
  appId: "1:314069792316:web:d6d67b2dba1cb93093b539",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
