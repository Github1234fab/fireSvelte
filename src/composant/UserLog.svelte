<script>
  import { login } from '../lib/firebase.js';
  let email = '';
  let password = '';

  async function handleLogin() {
    try {
      const userId = await login(email, password);
      console.log("Utilisateur connecté avec l'ID :", userId);
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  }
</script>

<form on:submit|preventDefault={handleLogin}>
  <input type="email" bind:value={email} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="Mot de passe" />
  <button type="submit">Se connecter</button>
</form>