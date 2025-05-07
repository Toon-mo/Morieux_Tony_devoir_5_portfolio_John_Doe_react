# morieux_tony_devoir_5_portfolio_john_doe_react

Ce projet est un portfolio React pour un développeur fictif, John Doe. Il utilise **React**, **React Router**.

## Prérequis

Node.Js

## Installation et Lancement

### 1. Cloner le dépôt

Clonez ce dépôt sur votre votre machine avec la commande suivante dans le terminale de Vs code:

git clone https://github.com/Toon-mo/morieux_tony_devoir_5_portfolio_john_doe_react.git

### 2. Installer les dépendances

Entrez les commandes:
npm install
npm install --save gh-pages

#### 2.1 Modifier le package.json

Dans le fichier package.json

### REmplacer:

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},

### Par:

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

### Ajouter:

"homepage": "https://Toon-mo.github.io/morieux_tony_devoir_5_portfolio_john_doe_react/"
sur l'avant dernière ligne

### 3. Lancer l'application en mode développement

Entrez la commande:
npm start

### 4. Créer le build

Entrez la commande:
npm run build

#### 5. Tester en local

#### 5.1 Installer un serveur local:

npm install -g server
serve -s build
