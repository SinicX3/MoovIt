import { Link } from "react-router-dom"

function Error() {

  return (<main>
        <div id="error">
      <h1>404</h1>
      <p>La page que vous recherchez n&apos;existe pas !</p>
      <Link to="/">Retour à la page d&apos;accueil</Link>
    </div>
  </main>)
}

export default Error