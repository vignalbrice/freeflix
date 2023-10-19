# Freeflix - Movie Streaming App

## Architecture

- Assets : Inclus les images et la typographie
- Components : Composants réutilisables dans le dossier `ui` et les composants globaux `common`
- Constants : Toute les constantes définis dans l'application
- Environnement : Inclus le fichier de type `Config` et l'environnement selectionné `production`
- Pages : Inclus les pages de l'application web
- Routes : Router pour créer les routes et Routes pour les définir.
- Services : Différents services appelés dans l'application
- Store : Gestion du state global
- Types : Types et Interface global
- Utils : Comprends les fonctions utilitaires à l'application

## Brief

Création d'un Dashboard de films:

- Header
  - Logo / Lien vers la page liste / Lien vers la page favoris
- Page d'accueil
  - Image d'un film que tu veux en fond
  - Liste de 4 films du moment
- Listing
  - Tabs avec différentes catégories (Action | Animation | Aventure | Comédie | Documentaire)
  - Listing de film lié à la catégorie sélectionné
- Favoris
  - Ajout / suppression
  - Afficher la liste des films
- Prérequis
  - Création de composant de Base (ui/ux) (BaseTabs, BaseCard...)

Api à utiliser: https://developers.themoviedb.org/3/getting-started/introduction

Techno:

- Vue3, Pinia, Tailwind

Les plus :

- Typescript

Pour le design tu peux t'inspirer de Netflix ou laisser parler ton imagination

Une fois que tu as fini, crée un repo git public et envoie moi le lien

Bon courage ! 🤓

## Setup

Make sure to install the dependencies:

````bash
# npm
npm install

# yarn
yarn install


## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev

````

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
