import { db } from "../lib/firebase.js";
import { collection, addDoc } from "firebase/firestore";

export async function createData(data) {
  try {
    const docRef = await addDoc(collection(db, "commande"), data);
    console.log("Document ajouté avec ID :", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Erreur lors de l'ajout du document :", error);
    throw error;
  }
}

// Récupération des données depuis Firestore
// export async function fetchData() {
//   const snapshot = await db.collection("commande").get();
//   return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// }

// Mise à jour d'un document dans Firestore
// export async function updateData(id, newData) {
//   await db.collection("commande").doc(id).update(newData);
// }

// Suppression d'un document dans Firestore
// export async function deleteData(id) {
//   await db.collection("commande").doc(id).delete();
// }
