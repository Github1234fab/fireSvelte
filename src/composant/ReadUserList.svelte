<script>
import { onMount } from 'svelte';
import { fetchUserData } from '../lib/firebase.js';
import Delete from './Delete.svelte';

let data = [];
let userId = ''; // Remplacez ceci par l'ID utilisateur actuel

async function loadData() {
  try {
    data = await fetchUserData('commande', userId);
    console.log(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
}

function handleDeleted() {
  // Reload the data when a product is deleted
  loadData();
}
</script>

<button on:click={loadData}>Charger les données</button>

<ul>
  {#each data as product (product.id)}
    <li>
      {product.nombre}: {product.produit}
      <Delete id={product.id} on:deleted={handleDeleted} />
    </li>
  {/each}
</ul>