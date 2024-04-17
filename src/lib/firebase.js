// Importez la fonction `initializeApp` depuis le SDK Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importez Firestore si vous utilisez Firestore

// Configuration de votre application Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7desTDoiCwzDtUfICatukD1I9McTboeQ",
  authDomain: "fire-1-9e420.firebaseapp.com",
  projectId: "fire-1-9e420",
  storageBucket: "fire-1-9e420.appspot.com",
  messagingSenderId: "568346755292",
  appId: "1:568346755292:web:228e7d1a2e9f4419e2b419",
};

// Initialisation de Firebase avec la configuration
const app = initializeApp(firebaseConfig);

// Exportez l'instance Firestore si vous utilisez Firestore
export const db = getFirestore(app);
