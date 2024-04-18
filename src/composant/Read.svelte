<script>
import { fetchAllData } from '../lib/firebase.js';

let data = [];

async function loadData() {
  try {
    data = await fetchAllData('commande');
    console.log(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
}
</script>

<button on:click={loadData}>Charger les données</button>