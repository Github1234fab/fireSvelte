import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  addDoc,
  query,
  getDocs,
  writeBatch, // Ajoutez cette ligne
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7desTDoiCwzDtUfICatukD1I9McTboeQ",
  authDomain: "fire-1-9e420.firebaseapp.com",
  projectId: "fire-1-9e420",
  storageBucket: "fire-1-9e420.appspot.com",
  messagingSenderId: "568346755292",
  appId: "1:568346755292:web:228e7d1a2e9f4419e2b419",
};

// Initialiser l'application Firebase
const app = initializeApp(firebaseConfig);

// Obtenir une instance de Firestore
const db = getFirestore(app);


export async function createData(collectionName, produit, nombre) {
  try {
    const data = { produit, nombre };
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document ajouté avec ID :", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Erreur lors de l'ajout du document :", error);
    console.log("Type d'erreur :", typeof error);
    console.log("Message d'erreur :", error.message);
    throw error; // Re-lancez l'erreur pour permettre à l'appelant de la gérer si nécessaire
  }
}

// Lire un document
export async function readData(collectionName, docId) {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
}

// Mettre à jour un document
export async function updateData(collectionName, docId, data) {
  const docRef = doc(db, collectionName, docId);

  await updateDoc(docRef, data);
  console.log("Document updated");
}

// Supprimer un document
export async function deleteData(collectionName, docId) {
  const docRef = doc(db, collectionName, docId);

  await deleteDoc(docRef);
  console.log("Document deleted");
}

// Lire tous les documents d'une collection
export async function fetchAllData(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return docs;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
}

// Supprimer tous les documents d'une collection
export async function deleteAllData(collectionName) {
  const q = query(collection(db, collectionName));
  const querySnapshot = await getDocs(q);
  const batch = writeBatch(db);

  querySnapshot.forEach((doc) => {
    batch.delete(doc.ref);
  });

  await batch.commit();
}