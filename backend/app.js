const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const plantRoutes = require('./routes/plants');

mongoose.connect('mongodb+srv://kevin-martins:rqX76dRKdN-bA9X@cluster0.ejucwoz.mongodb.net/?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

// app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

app.use((req, res, next) => {
   // accéder à notre API depuis n'importe quelle origine
   res.setHeader('Access-Control-Allow-Origin', '*');
   // ajouter les headers mentionnés aux requêtes envoyées vers notre API
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   // envoyer des requêtes avec les méthodes mentionnées
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
});

app.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app;
