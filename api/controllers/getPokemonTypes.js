const { Types } = require('../src/db');
const axios = require('axios');
const { getAllPokemon } = require('./getAllPokemon');

const getPokemonTypes = async (req, res) => {
  const response = (await axios('https://pokeapi.co/api/v2/type')).data.results;

  try {
    const existingTypes = await Types.findAll();
    const newTypes = response.filter((type) => {
      return !existingTypes.some((existingType) => existingType.name === type.name);
    });

    await Types.bulkCreate(newTypes);

    const allTypes = await Types.findAll();
    res.status(200).json(allTypes);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getPokemonTypes };
