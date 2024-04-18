<script>
import { deleteData, deleteAllData } from '../lib/firebase.js';
import { createEventDispatcher } from 'svelte';

export let id;

const dispatch = createEventDispatcher();

async function deleteProduct() {
  try {
    await deleteData('commande', id);
    // Emit an event to tell the parent component to reload the data
    dispatch('deleted');
  } catch (error) {
    console.error("Erreur lors de la suppression du produit :", error);
  }
}


</script>

<button on:click={deleteProduct}>Supprimer</button>
