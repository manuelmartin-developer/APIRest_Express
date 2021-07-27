const router = require('express').Router(); 
const pages =  require('../controllers/pages')


router.get('/film/:title', pages.details)
router.post('/film/', pages.postFilm)
router.put('/film/', pages.putFilm); 
router.delete('/film/', pages.deleteFilm); 



module.exports = router; 