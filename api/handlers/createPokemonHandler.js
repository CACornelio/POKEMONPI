const { createPokemonDB } = require('.././controllers/createPokemon');

const createPokemonHandler =async (req, res, next) => {
  try {
    await createPokemonDB(req, res, next);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  createPokemonHandler,
};