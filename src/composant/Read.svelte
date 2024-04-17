<script>

  import { fetchData } from './firebaseService.js';
  import { onMount } from 'svelte';
  let produits = [];

  async function loadProducts() {
    try {
      produits = await fetchData();
       console.log('Produits récupérés :', produits);
    } catch (error) {
      console.error('Erreur lors du chargement des produits :', error);
    }
  }
 
  onMount(loadProducts);
</script>

<h1>Liste de courses</h1>

<div>
 
 {#if produits.length > 0}
    <ul>
      {#each produits as produit}
        <li>{produit.produit} - Quantité : {produit.nombre}</li>
      {/each}
    </ul>
  {:else}
    <p>Aucun produit enregistré pour le moment.</p>
  {/if}
</div> 