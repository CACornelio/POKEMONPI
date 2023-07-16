const {getPokemonById} = require('../controllers/getPokemonByID')

const getPokemonByIDHandler = async (req,res) =>{
    const {id} = req.params;
    try {
        const pokemonByID = await getPokemonById(id);
        return res.status(200).json(pokemonByID);
    } catch (error) {
res.status(400).json({ message : error.message + "  error en handler"});
        
    }
}
module.exports = {getPokemonByIDHandler};