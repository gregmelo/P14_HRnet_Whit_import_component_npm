<a name="readme-top"></a>

# HRnet - Système de Gestion des Employés

📄 Ce projet est aussi disponible en [anglais 🇬🇧](./README.md)

<div align="center">

![HRnet Logo](./src/assets/logo.png)
</div>

HRnet est une application web moderne développée avec React, conçue pour gérer efficacement les dossiers des employés. Elle permet de créer de nouveaux profils d'employés, de visualiser une liste paginée, et de rechercher des employés, avec une interface conviviale et une persistance des données.

---

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Contribuer](#contribuer)
- [Licence](#licence)
- [Contact](#contact)

---

## Fonctionnalités

HRnet offre les fonctionnalités suivantes :

### Création d'employés
- **Soumission de formulaire** : Créez un nouvel employé avec un formulaire complet comprenant :
  - Prénom, Nom
  - Date de naissance (1955–2009)
  - Date d’embauche (1971–présent)
  - Adresse (Rue, Ville, État, Code postal)
  - Département
- **Validation** :
  - Tous les champs sont obligatoires.
  - Le prénom et le nom doivent comporter au moins 2 caractères et ne doivent pas contenir de chiffres ni être uniquement composés d’espaces.
  - Les champs d'adresse (Rue, Ville, Code postal) ne peuvent pas être vides ou contenir uniquement des espaces.
  - L'État et le département doivent être sélectionnés dans des menus déroulants.
- **Modal de confirmation** : Affiche un message de succès ("L'employé [Nom] a été ajouté avec succès à la liste.") ou un message d'erreur si la validation échoue.

### Liste des employés
- **Tableau paginé** : Affiche les employés par groupes de 10 par page.
- **Recherche** : Permet de filtrer les employés par nom.
- **Colonnes** : Prénom, Nom, Date de naissance, Date d’embauche, Rue, Ville, État, Code postal, Département.
- **Navigation** : Liens pour retourner à la page d'accueil.

### Gestion des données
- **Données initiales** : 20 employés fictifs générés au premier chargement, enregistrés dans `localStorage`.
- **Intégration Redux** : Utilise Redux Toolkit pour gérer les données des employés.
- **Persistance** : Les données sont conservées dans le `localStorage` même après rechargement de la page.

### Interface utilisateur
- **Composants personnalisés** :
  - `Button` réutilisable avec un style en dégradé radial.
  - `Input` pour les champs texte et numériques.
  - `Select` pour les menus déroulants (États et Départements).
  - `DatePicker` stylisé (fond blanc, icône calendrier à droite).
  - `Modal` avec des messages distincts (vert pour succès, rouge pour erreurs).
- **Design responsive** : L'interface s’adapte aux différentes tailles d’écran.
- **Style cohérent** : Palette de couleurs harmonieuse (`#3e4720`, `#85a885`, `#a1a88c`) et bords arrondis.

---

## Technologies

- **React** : Librairie frontend.
- **React Router** : Pour la navigation (`/` pour l’accueil, `/employees-list` pour la liste).
- **Redux Toolkit** : Gestion centralisée de l'état.
- **@faker-js/faker** : Génère de fausses données réalistes.
- **react-datepicker** : Sélectionneur de date personnalisé.
- **react-icons** : Pour l’icône calendrier.
- **SCSS** : Pour un style modulaire.
- **localStorage** : Pour la persistance des données.

---

## Installation

Suivez ces étapes pour installer le projet localement :

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/your-username/hrnet.git
   cd hrnet

    Installer les dépendances : Assurez-vous d’avoir Node.js installé. Ensuite :

npm install

Cela installe toutes les dépendances nécessaires, dont :

    react, react-dom, react-router-dom

    @reduxjs/toolkit, react-redux

    @faker-js/faker

    react-datepicker, react-icons

    sass

Lancer le serveur de développement :

    npm start

    L’application s’ouvrira à l’adresse http://localhost:3000

## Utilisation

    Page d'accueil (/) :

        Remplissez tous les champs obligatoires.

        Cliquez sur "Save".

        Un message s'affichera en cas de succès ou d'erreur.

        Naviguez vers la liste via un lien si présent.

    Page Liste des employés (/employees-list) :

        Affiche tous les employés (fictifs au départ).

        Recherche par nom.

        Pagination : Précédent / Suivant.

        Lien pour retourner à l’accueil.

    Persistance des données :

        Les données sont stockées dans le localStorage.

        Pour les réinitialiser :

        localStorage.clear()

## Structure du projet

```plaintext
📦HRnet
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜logo.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┃ ┗ 📜Button.scss
 ┃ ┃ ┣ 📂customDatePicker
 ┃ ┃ ┃ ┣ 📜CustomDatePicker.jsx
 ┃ ┃ ┃ ┗ 📜CustomDatePicker.scss
 ┃ ┃ ┣ 📂employeeForm
 ┃ ┃ ┃ ┣ 📜EmployeeForm.jsx
 ┃ ┃ ┃ ┗ 📜EmployeeForm.scss
 ┃ ┃ ┣ 📂employeesList
 ┃ ┃ ┃ ┣ 📜EmployeesListComponent.jsx
 ┃ ┃ ┃ ┗ 📜EmployeesListComponent.scss
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜Header.scss
 ┃ ┃ ┣ 📂input
 ┃ ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┃ ┗ 📜Input.scss
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┣ 📜Modal.jsx
 ┃ ┃ ┃ ┗ 📜Modal.scss
 ┃ ┃ ┗ 📂select
 ┃ ┃ ┃ ┣ 📜Select.jsx
 ┃ ┃ ┃ ┗ 📜Select.scss
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜generateFakeEmployees.js
 ┃ ┃ ┗ 📜optionsSelects.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂EmployeesList
 ┃ ┃ ┃ ┗ 📜EmployeesList.jsx
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┗ 📜Home.jsx
 ┃ ┃ ┗ 📂NotFound
 ┃ ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┃ ┗ 📜NotFound.scss
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📜employeeSlice.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📜main.jsx
 ┃ ┣ 📜main.scss
 ┃ ┗ 📜Router.jsx
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜README.fr.md
 ┗ 📜vite.config.js
```

## Contribuer

Les contributions sont les bienvenues ! Pour proposer des modifications :

    Forkez le dépôt.

    Créez une branche :

git checkout -b feature/ma-fonctionnalité

Apportez vos modifications puis validez :

git commit -m "Ajout de la fonctionnalité"

Poussez la branche :

    git push origin feature/ma-fonctionnalité

    Ouvrez une pull request sur GitHub.

Merci de respecter le style du code existant et d’ajouter des tests si nécessaire.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d’informations.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>


## Contact

Grégory Véricel - [LinkedIn](https://www.linkedin.com/in/gregory-vericel/) - gregoryvericel6@gmail.com

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>