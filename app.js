import express from 'express';
import db from './mongodb/db.js';


const app = express();

app.get('/', function (req, res) {
  res.send(1);
});

app.listen(3000);