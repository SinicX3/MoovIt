function Application () {

  return(<main id="applicant">
    <div>
      <h1>Créer un nouveau dossier Moovit</h1>
      <p>Vous pouvez utiliser le formulaire ci-dessous pour demander à ce qu'un véhicule Moovit soit mis à disposition dans votre commune.</p>
      <p>Les informations informations ci-dessous seront transmises à notre équipe. Celle-ci vous recontactera</p>
    </div>
    <form> 
      <label for="name">Nom retenu pour le dossier :</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Mail de contact :</label>
      <input type="email" id="email" name="email" required />
      <label for="tel">Téléphone de contact :</label>
      <input type="tel" id="tel" name="tel" required />
      <label for="CP">Code postal de votre commune :</label>
      <input type="text" id="CP" name="CP" required />
      <label for="number">Nombre de véhicules demandés :</label>
      <input type="number" id="number" name="number" required /> 
      <button type="submit">Envoyer</button>
    </form>
  </main>)
}

export default Application