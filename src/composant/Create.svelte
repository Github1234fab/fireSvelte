<script>
  import { createData } from '../lib/firebase.js';
  let produit = '';
  let nombre = 1; 

  async function addNewData() {
    if (produit.trim() === '') {
      console.log('Veuillez saisir un produit');
      return;
    }

    const produitTrimmed = produit.trim();

    await createData("maCollection", produitTrimmed, nombre);
    console.log('Document ajouté avec succès !');

    produit = '';
    nombre = 1; 
  }
  async function handleSubmit() {
    await addNewData();
  }
</script>

<div>
<input id="produit" type="text" bind:value={produit} placeholder="Entrez un produit">
  <input id="nombre" type="number" bind:value={nombre} placeholder="Entrez une quantité">
  <button on:click={handleSubmit}>Ajouter</button>
</div>