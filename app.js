const router  = require('./routes/router');
const express = require('express');


const app = express();
const port = 3000;

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

//Routes

//Routes
app.use('/api', router); 


// 404 -Page not found
app.use(function(req, res, next) {
    return res.status(404).send({ message: 'Pagina'+req.url+' Not found.' });
  });
  
  // 500 - Any server error
  app.use(function(err, req, res, next) {
    return res.status(500).send({ error: err });
  });


app.listen (port, () => {
    console.log(`Servidor Escuchando por el puerto  http://localhost:${port}`); 
})

