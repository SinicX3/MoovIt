import { useNavigate } from "react-router-dom"

function Header () {

  const navigate = useNavigate()

  return(<header>
    <img src="/assets/logo.png" onClick={() => navigate('/')}/>
    <div>
      <p>A propos</p>
      <p className="login">Connexion/S'inscrire</p>
    </div>
    </header>)
}

export default Header