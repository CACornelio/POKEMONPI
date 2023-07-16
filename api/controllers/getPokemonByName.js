const { Op } = require('sequelize');
const { Pokemon, Types } = require('../src/db');
const axios = require('axios');

const getPokemonByName = async (req, res) => {
  try {
    let name = req.query.name; // Obtengo el valor del parámetro "name" de la solicitud

    let pokemon = await Pokemon.findOne({
      where: { name: {
        [Op.like]:name }}
    }); // Busco en la base de datos un Pokémon con el nombre especificado

    if (pokemon) {
      // Si se encuentra el Pokémon en la base de datos
      res.status(200).send(pokemon); // Devuelvo el Pokémon encontrado en la respuesta con un estado 200
    } else {
      // Si no se encuentra el Pokémon en la base de datos
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      // Realizo una solicitud a la API externa con el nombre proporcionado

      let apiPokemon = response.data; // Obtengo los datos del Pokémon de la respuesta

      res.status(200).send(apiPokemon); // Devuelvo el Pokémon encontrado en la API en la respuesta con un estado 200
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {getPokemonByName}