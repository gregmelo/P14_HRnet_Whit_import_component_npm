import { Link } from "react-router-dom"; // Importation du composant Link de React Router pour la navigation interne
import Header from "../../components/header/Header"; // Importation du composant Header
import "./NotFound.scss"; // Importation du fichier de styles SCSS spécifique à la page NotFound

/**
 * Composant NotFound affiché lorsque l'utilisateur tente d'accéder à une page inexistante.
 * 
 * Ce composant affiche un message d'erreur 404 ainsi qu'un lien permettant de retourner
 * à la page d'accueil.
 * 
 * @returns {JSX.Element} Le composant JSX représentant la page 404.
 */
export default function NotFound() {
  return (
    <>
      <main className="main-container"> {/* Élément principal de la page */}
      <Header showViewEmployeesListButton={false} /> {/* Affichage du header sans le bouton de liste des employés */}
        {/* Contenu principal de la page 404 */}
        <div className="notfound"> {/* Conteneur du message d'erreur */}
          <h1>404</h1> {/* Code d'erreur indiquant que la page est introuvable */}
          <h2>Oups! La page que vous demandez n&apos;existe pas.</h2> {/* Message d'erreur */}
          
          {/* Lien permettant de revenir à la page d'accueil */}
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </main>
    </>
  )
}