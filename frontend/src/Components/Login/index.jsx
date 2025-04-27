function Login () {

  return(<main>
    <section id="section_login">
      <form>
        <h1>Se connecter / S'inscrire</h1>
        <label>Email</label>
        <input type="email" id="email" name="email"></input>
        <label>Mot de passe</label>
        <input type="password" id="pw" name="pw"></input>
        <div><button>Se connecter</button><button>S'inscrire</button></div>
      </form>
    </section>
  </main>)
}

export default Login 