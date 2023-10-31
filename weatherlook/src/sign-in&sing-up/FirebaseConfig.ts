import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIrJti5xVZFckflG_a7N4agNrcOKlfSBk",
  authDomain: "weatherdailylook.firebaseapp.com",
  projectId: "weatherdailylook",
  storageBucket: "weatherdailylook.appspot.com",
  messagingSenderId: "176364181940",
  appId: "1:176364181940:web:5c0289e07594a663b3bae1",
  measurementId: "G-LTS9R897K1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
