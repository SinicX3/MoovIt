import { useNavigate } from "react-router-dom"

function Home() {

const navigate = useNavigate()

  return (<main>
    <h1>Trouver un véhicule en auto-partage avec MoovIt !</h1>
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
    </section>
    <section id="Info_section">
      <div>
        <h2>MoovIt, c'est...</h2> 
        <p>Des véhicules partout en France</p>
        <p>La simplicité de l'auto-partage</p>
        <p>Des centaines d'euros d'économies</p>
      </div>
      <div>

      </div>
    </section>
  </main>)
}

export default Home