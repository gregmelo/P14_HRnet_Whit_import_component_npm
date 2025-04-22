import { Link, useNavigate } from 'react-router-dom'; // Importation des outils de navigation depuis React Router
import logo from '../../assets/logo.webp'; // Importation de l'image du logo
import "./Header.scss"; // Importation des styles SCSS pour le composant Header
import propTypes from 'prop-types'; // Importation de PropTypes pour la validation des props
import Button from '../button/Button';

/**
 * Composant Header qui affiche une barre de navigation avec un logo, un titre,
 * et un bouton conditionnel pour naviguer vers la liste des employés ou la page d'accueil.
 * 
 * @component
 * @param {Object} props - Les props passées au composant
 * @param {boolean} [props.showViewEmployeesListButton=true] - Détermine si le bouton "View current employees" doit être affiché
 * @returns {JSX.Element} Le composant de l'en-tête avec navigation et bouton conditionnel
 */
export default function Header({ showViewEmployeesListButton = true }) {
  // Hook useNavigate pour gérer la navigation programmatique
  const navigate = useNavigate();

  return (
    // Élément header contenant la barre de navigation et le bouton
    <header className="header">
      {/* Barre de navigation */}
      <nav className="navBar">
        {/* Lien cliquable vers la page d'accueil avec logo et titre */}
        <Link className="navBar__links" onClick={() => navigate('/')}>
          {/* Image du logo */}
          <img src={logo} alt="Logo HRnet" className="navBar__logo" />
          {/* Titre de l'application */}
          <h1 className="navBar__title">HRnet</h1>
        </Link>
      </nav>

      {/* Bouton conditionnel : affiche "View current employees" ou "Home" selon la prop */}
      <Button
        text={showViewEmployeesListButton ? 'View current employees' : 'Home'}
        onClick={() => navigate(showViewEmployeesListButton ? '/employees-list' : '/')}
        className="header__button" // Classe supplémentaire pour le header
      />
    </header>
  );
}

// Définition des PropTypes pour valider les props passées au composant
Header.propTypes = {
  /**
   * Indique si le bouton "View current employees" doit être affiché.
   * Par défaut, il est affiché (true).
   * @type {boolean}
   */
  showViewEmployeesListButton: propTypes.bool,
};