import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyDE49NtNShSufQprlkn2Vk3gGmvKZERtfw",
  authDomain: "signal-clone-fac14.firebaseapp.com",
  projectId: "signal-clone-fac14",
  storageBucket: "signal-clone-fac14.appspot.com",
  messagingSenderId: "526571925324",
  appId: "1:526571925324:web:67a681fd2f6fbc2aa229e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, createUserWithEmailAndPassword };