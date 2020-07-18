const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+'./dist/angular-affichage-dynamique'));

app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname+'/dist/angular-affichage-dynamique')),
);

app.listen(process.env.PORT || 3000);
