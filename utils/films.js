const fetch = require('node-fetch');
const { title } = require('process');
require('dotenv').config()

const films = {

    getOneFilm: /*usamos método asíncrono*/ async (title) =>{
        const res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.API_KEY}`)
        const film = await res.json(); 
        return film; 
    }

};

module.exports = films; 