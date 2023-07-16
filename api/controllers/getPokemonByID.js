

const { Pokemon, Types } = require('../src/db');
const axios = require('axios');
const validator = require('validator')

const getPokemonByID = async (req, res) => {
  const  {id}  =  req.params;

  try {
    if (validator.isUUID(id)) {
      const dbPokemonById = await Pokemon.findByPk(id, {   
        include: [{   
          model: Types,
          attributes: ['name'],
          through: {
            attributes: []
          }
        }]
      });

      if (!dbPokemonById) {
        res.status(404).json({ error: 'Pokemon not found!' }); 
      } else {
        res.status(200).json(dbPokemonById);
      }
    } else {
      const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);   
      const apiPokemonById = {
        id: response.data.id,
        name: response.data.name,
        img: response.data.sprites.versions['generation-v']['black-white'].animated['front_default'],
        types: response.data.types.map(t => {
          return { name: t.type.name };
        }),
        health: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        height: response.data.height,
        weight: response.data.weight
      };

      res.status(200).json(apiPokemonById);  
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });     
  }
}
module.exports={getPokemonByID}






// id: data.id,
// name: data.name,
// image: data.sprites.other['official-artwork'].front_default,
// hp: data.stats[0].base_stat,
// attack:data.stats[1].base_stat,
// defense: data.stats[2].base_stat,
// speed: data.stats[5].base_stat,
// height: data.height,
// weight: data.weight,
// Types:data.types.map((type)=>{return{name:type.type.name}}),
// Database:false,