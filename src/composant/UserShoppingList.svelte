<script>
  import { createShoppingList } from '../lib/firebase.js';
  let shoppingList = [''];
  let userId = ''; // Remplacez ceci par l'ID utilisateur actuel

  function handleInputChange(index, event) {
    shoppingList[index] = event.target.value;
  }

  function handleAddItem() {
    shoppingList = [...shoppingList, ''];
  }

  async function handleSubmit() {
    try {
      await createShoppingList(userId, shoppingList);
      alert('Liste de courses créée avec succès');
    } catch (error) {
      alert('Erreur lors de la création de la liste de courses');
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  {#each shoppingList as item, index (index)}
    <input type="text" bind:value={item} on:input={(event) => handleInputChange(index, event)} />
  {/each}
  <button type="button" on:click={handleAddItem}>
    Ajouter un article
  </button>
  <button type="submit">Créer la liste de courses</button>
</form>