const express = require('express');
const router = require('./routes/router');


const app = express();
const port = 3000;


app.use(express.urlencoded({extended: false})); //Para hacer post
app.use(express.json()); //Para hacer post

app.use('/api', router);

// 404 - Page not found
app.use(function(req, res, next) {
    return res.status(404).send({ message: 'Pagina -'+req.url+'- Not found.' });
  });
  
// 500 - Any server error
  app.use(function(err, req, res, next) {
    return res.status(500).send({ error: err });
  });

app.listen (port, () => {
    console.log(`Servidor Escuchando http://localhost:${port}`);
});