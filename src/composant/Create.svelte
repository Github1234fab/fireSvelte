<script>
  // Importez la fonction createData depuis firebaseService.js
  import { createData } from './firebaseService.js';

  let produit = '';
  let nombre = 1; // Définissez une valeur par défaut pour la quantité

  // Fonction pour créer un nouveau document Firestore avec les données saisies par l'utilisateur
  async function addNewData() {
    if (produit.trim() === '') {
      console.log('Veuillez saisir un produit');
      return;
    }

    const newData = {
      produit: produit.trim(),
      nombre: nombre, // Utilisez la quantité saisie par l'utilisateur
    };

    // Appelez la fonction createData pour ajouter les nouvelles données
    await createData(newData);
    console.log('Document ajouté avec succès !');

    // Réinitialisez les champs après l'ajout
    produit = '';
    nombre = 1; // Réinitialisez la quantité à sa valeur par défaut
  }

  async function handleSubmit() {
    // Appel de la fonction pour ajouter le produit dans Firestore
    await addNewData();
  }
</script>

<div>
  <input type="text" bind:value={produit} placeholder="Entrez un produit">
  <input type="number" bind:value={nombre} placeholder="Entrez une quantité">
  <button on:click={handleSubmit}>Ajouter</button>
</div>
