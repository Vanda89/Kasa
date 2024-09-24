
# Projet Bootcamp Kasa : Refonte d'une application Web avec React et React Router

## Contexte
Kasa est une entreprise de location d’appartements entre particuliers, active depuis près de 10 ans. La plateforme existante, développée en ASP.NET, nécessite une refonte totale pour s’adapter aux nouvelles technologies et améliorer l’expérience utilisateur.

<img src="/src/assets/background/housing_bg.jpg" />

### Objectifs du Projet
- **Refonte complète du site en React** : passer d'une stack legacy en ASP.NET à une stack moderne JavaScript avec React pour le front-end et Node.js pour le back-end (recrutement du développeur back-end en cours).
- **Création de composants réactifs** : développer les composants en suivant les maquettes Figma fournies par le designer.

## Contraintes Techniques
- Utilisation de **Create React App** ou **Vite** pour le bundling.
- Suivi des **coding guidelines** internes à Kasa.
- Utilisation des **20 dernières annonces de logements** fournies dans un fichier JSON pour simuler les données back-end.
- **Maquettes responsives** fournies sur Figma avec tous les assets et composants nécessaires.

## Fonctionnalités Clés

### Galerie d’Images
- Afficher une galerie pour chaque annonce.
- Fonction de défilement circulaire : 
  - Si l'utilisateur clique sur "Image suivante" à la dernière image, retourner à la première image.
  - Si l'utilisateur clique sur "Image précédente" à la première image, afficher la dernière image.
- Cacher les boutons "Suivant" et "Précédent" s'il n'y a qu'une seule image.
- Garder la hauteur constante de la galerie, les images sont centrées et coupées si nécessaire.

### Composant Collapse
- À l’ouverture de la page, tous les collapses doivent être fermés.
- Chaque clic sur un collapse :
  - S’il est fermé, l’ouvre.
  - S’il est ouvert, le ferme.

## Design
- **Maquettes Figma** [Lien](https://drive.google.com/file/d/18S-WR7XMTb6rTkpXTOdaiu7uKObRB4sK/view?usp=drive_link).
- **Prototypes des animations des menus déroulants (Collapse) et des galeries d’images** [Lien](https://drive.google.com/drive/folders/1Nb_H7XDZZLN1-nL3Y_AV2io9a_V75TaA?usp=drive_link).
- **Design responsive** : adapté pour toutes les tailles d’écran (desktop et mobile).
- Les composants du site suivent une **logique de composants Figma** pour faciliter la construction en React.

## Roadmap et Organisation
1. **Installation et Initialisation** :
   - Mise en place de l’environnement avec Create React App ou Vite.
   - Installation des dépendances (React Router, gestion des states, etc.).
   
2. **Développement des Composants** :
   - Développer les composants de base (Gallery, Collapse, etc.).
   - Intégration des maquettes Figma avec les assets graphiques.
   
3. **Gestion des Routes** :
   - Implémenter le routing avec React Router pour naviguer entre les pages d’annonces.
   
4. **Tests et Debugging** :
   - Tester la navigation, les composants dynamiques, et l’affichage des annonces à partir du fichier JSON.
   
5. **Présentation et Livraison** :
   - Préparer la présentation du projet à l'équipe avec les fonctionnalités clés et le design finalisé.

## Installation

1. Clonez ce dépôt : `git clone https://github.com/Vanda89/Kasa.git`
2. Installez les dépendances : `npm install`
3. Lancez le serveur : `npm start`

## Utilisation

Le site permet de naviguer parmi les annonces de logements disponibles. Les données sont actuellement fournies par un fichier JSON en attendant l'implémentation du back-end.

## Contribuer

Ce projet est principalement destiné à être une référence de portfolio, les contributions ne sont donc pas recherchées pour le moment.


