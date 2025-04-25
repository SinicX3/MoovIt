function Vehicle () {

  return(<main id='vehicle'>
    <div>
      <h1>Ajouter son véhicule sur MoovIt</h1>
      <p>Tous les champs ci-dessous sont obligatoires</p>
    </div>
    <form>
      <label for="photo">Nom retenu pour le dossier :</label>
      <input type="file" id="photo" name="photo" required />
      <label for="brand">Marque du véhicule :</label>
      <input type="text" id="brand" name="brand" required />
      <label for="email">Mail de contact :</label>
      <input type="email" id="email" name="email" required />
      <label for="tel">Téléphone de contact :</label>
      <input type="tel" id="tel" name="tel" required />
      <label for="CP">Code postal de votre commune :</label>
      <input type="text" id="CP" name="CP" required />
    </form>
  </main>)
}

export default Vehicle