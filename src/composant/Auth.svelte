<script>
  import { register } from '../lib/firebase.js';

  let email = '';
  let password = '';
  let registerOk = "";

  async function handleSubmit() {
    try {
      const userId = await register(email, password);
      console.log("ID de l'utilisateur :", userId);
    registerOk = "Inscription réussie !";
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
     
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Email:
    <input type="email" bind:value={email} required />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} required />
  </label>
  <button type="submit">Sign Up</button>
</form>

<h3>{registerOk}</h3>