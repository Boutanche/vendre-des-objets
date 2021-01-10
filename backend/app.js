const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const stuffRoutes = require('./routes/stuff');


const app = express();
mongoose.connect(' mongodb://localhost, localhost:27017/tuto',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());

  const Thing = require('./models/thing');
  
  app.use('/api/stuff', stuffRoutes);


module.exports = app;
