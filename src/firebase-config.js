import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "wise-words-6c2ed.firebaseapp.com",
  projectId: "wise-words-6c2ed",
  storageBucket: "wise-words-6c2ed.appspot.com",
  messagingSenderId: "589118638728",
  appId: "1:589118638728:web:e05f96c5c1aedae8fa2d3d",
  measurementId: "G-T6C9SCVW2W"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }