import { useNavigate } from "react-router-dom"

function Header () {

  const navigate = useNavigate()

  return(<header>
    <img src="/assets/logo.png" onClick={() => navigate('/')}/>
    <div>
      {/* <p>A propos</p> */}
      <p className="login" onClick={() => navigate('/login')}>Se connecter / S'inscrire</p>
    </div>
    </header>)
}

export default Header