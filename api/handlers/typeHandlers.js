const {getPokemonTypes} =require('../controllers/getPokemonTypes')
const getPokemonTypesHandler = async (req, res) => {
    try {
  getPokemonTypes()
     
      res.status(200).json(allTypes);
    } catch (error) {
      
      res.status(404).json({ error: error.message });
    }
  };

  module.exports ={getPokemonTypesHandler}