const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getPokemonByID} = require('../../controllers/getPokemonByID')
const {getPokemonTypes} = require('../../controllers/getPokemonTypes');
const { allPokemonhandler } = require('../../handlers/pokemonHandler');
const { createPokemonHandler } = require('../../handlers/createPokemonHandler');
const { getPokemonByName } = require('../../controllers/getPokemonByName');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons",allPokemonhandler) //working
router.get('/pokemons/:id', getPokemonByID) //id working, UUID working 7/7/23
router.get('/pokemons',getPokemonByName) // working, brings list of all similar names in DB and API. 
router.get('/types',getPokemonTypes) //types working.
router.post('/pokemons', createPokemonHandler) //working with 2 types. example for use:"types": ["fire","water"]





module.exports = router;
