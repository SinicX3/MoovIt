import { useNavigate } from "react-router-dom"

function Home() {

const navigate = useNavigate()

  return (<main>
    <section id="Home_section">
      <div onClick={() => navigate('/err')}>Proposer mon véhicule </div>
      <div onClick={() => navigate('/')}>Monter un dossier MoovIt</div>
    </section>
    <section id="Info_section">
      <div>
        <h2>Des véhicules disponibles</h2>
        <p>Partout en France</p>
      </div>
      <div>

      </div>
    </section>
  </main>)
}

export default Home