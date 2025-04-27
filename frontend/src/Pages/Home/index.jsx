import { useNavigate } from "react-router-dom"
import Map from "../../Components/Map"

function Home() {

const navigate = useNavigate()

  return (<main>
    <h1 id="h1">Trouver un véhicule en auto-partage avec MoovIt !</h1>
    <section id="Home_section">
      <div onClick={() => navigate('/new')}>
        <img src="/assets/Voiture.png"/>
        <p>Proposer mon véhicule</p>
      </div> 
      <div onClick={() => navigate('/applicant')}>
        <img src="/assets/Dossier.png"/>
        <p>Faire une demande MoovIt</p>
      </div>
    </section>
    <section id="Find">
      <h2>Trouver un véhicule près de chez vous</h2>
      <Map />
    </section>
    <section id="Info_section">
      <div>
        <h2>MoovIt, c'est...</h2>
        <div id="sub_section">
          <div>
            <img src="/earth-europe-solid.svg"/>
            <p>Des véhicules partout en France</p>
          </div>
          <div>
            <img src="/face-smile-solid.svg"/>
            <p>La simplicité de l'auto-partage</p>
          </div>
          <div>
            <img src="/money-bills-solid.svg"/>
            <p>Des centaines d'euros d'économies</p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </section>
  </main>)
}

export default Home