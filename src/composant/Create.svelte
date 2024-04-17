<script>

  import { createData } from './firebaseService.js';
  let produit = '';
  let nombre = 1; 

  async function addNewData() {
    if (produit.trim() === '') {
      console.log('Veuillez saisir un produit');
      return;
    }
    const newData = {
      produit: produit.trim(),
      nombre: nombre,
    };

    await createData(newData);
    console.log('Document ajouté avec succès !');

    produit = '';
    nombre = 1; 
  }
  async function handleSubmit() {

    await addNewData();
  }
</script>

<div>
  <input type="text" bind:value={produit} placeholder="Entrez un produit">
  <input type="number" bind:value={nombre} placeholder="Entrez une quantité">
  <button on:click={handleSubmit}>Ajouter</button>
</div>