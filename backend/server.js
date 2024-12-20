// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware pour analyser le JSON
app.use(express.json());

// Route d'exemple
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon portfolio backend!');
});

// Exemple de route API pour récupérer les informations du portfolio
app.get('/api/portfolio', (req, res) => {
  const portfolioInfo = {
    name: 'Ton Nom',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
    projects: [
      { title: 'Projet 1', description: 'Description du projet 1' },
      { title: 'Projet 2', description: 'Description du projet 2' }
    ]
  };
  res.json(portfolioInfo);
});

app.listen(port, () => {
  console.log(`Serveur backend en fonctionnement sur http://localhost:${port}`);
});
