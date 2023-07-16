const  getAllPokemons  = require("../controllers/getAllPokemon")

const allPokemonhandler = async(req, res, next) => {
  try {
    let name = req.query.name; //Recibo la request en una variable
    let pokemonsTotal = await getAllPokemons(); //Guardo mi controlador que trae todos los pokemons en una variable..
    if (name) { //Consulto si me pasan un nombre y lo busco en la variable de arriba
      let pokemonName = await pokemonsTotal.filter((el) => 
        el.name.toLowerCase().includes(name.toLowerCase()) //busca en cada elemento hasta encontrar un elemento que incluya el nombre que se esta buscando. 
      );
      pokemonName.length
        ? res.status(200).send(pokemonName) // Si lo encuentro lo devuelvo,
        : res.status(404).send("El pokemon ingresado no existe"); // y sino devuelvo el texto.
    } else {
      res.status(200).send(pokemonsTotal); //Sino devuelvo todos los pokemons
    }
  } catch (error) {
    next(error);
  }
};
module.exports ={allPokemonhandler};