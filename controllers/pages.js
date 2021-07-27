const films = require('../utils/films');

const pages = {

details: async (req, res) => {

    let title = await req.params.title
    const film = await films.getOneFilm(title);

    res.status(200).send(film);

},

postFilm: async (req, res) => {
    
    const title = await req.body.Title;
    const film = await films.getOneFilm(title);
    res.status(200).send ({message: `Se ha guardado ${title}`});
    
},
putFilm: async (req, res) => {
    
    const title = await req.body.Title;
    const id = await req.body.imdbID

    const film = await films.getOneFilm(title);
    res.status(201).send ({
        id: `${id}`,
        message: `Se ha agregado ${title}`});
},
deleteFilm: async (req, res) => {
    
    const title = await req.body.Title;
    const id = await req.body.imdbID

    const film = await films.getOneFilm(title);
    res.status(201).send ({
        id: `${id}`,
        message: `Se ha borrado ${title}`});
}

};

module.exports = pages;