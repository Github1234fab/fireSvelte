<script>
import { deleteAllData } from '../lib/firebase.js';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

async function deleteAllProducts() {
  try {
    await deleteAllData('commande');
    // Emit an event to tell the parent component to reload the data
    dispatch('deleted');
  } catch (error) {
    console.error("Erreur lors de la suppression de tous les produits :", error);
  }
}
</script>

<button on:click={deleteAllProducts}>Supprimer tous les produits</button>