const { Pokemon,Types } = require("../src/db");


const createPokemonDB = async (req, res, next) => { //Ruta de creacion del pokemon
    try {
      let { name, image, hp, attack, defense, speed, height, weight, types} = req.body //Datos que necesito pedir
  const existant = await Pokemon.findOne({ where: { name: name } }) //verificamos que el pokemon no exista ya en nuestra DB
  if(!existant){ //si no existe lo creamos
      const newPokemon = await Pokemon.create({
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
      });
  
      if (!name) return res.json({ info: "El nombre es obligatorio" });
  
      if(Array.isArray(types) && types.length){ //Consulto si lo que me llega en TYPES, es un arreglo y si tiene algo adentro.
        let dbTypes = await Promise.all( //Armo una variable que dentro tendra una resolucion de promesas
          types.map((e) => { // Agarro la data de types y le hago un map para verificar que cada elemento exista en 
            return Types.findOne({where:{ name: e.toLowerCase()}}) // nuestra tabla de tipos
          })
        )
       await newPokemon.setTypes(dbTypes) //Una vez que se resuelva la promesa del Pokemon.create, le agrego los tipos
  
       return res.send("Pokemon creado exitosamente");
      }
    } else{res.status(400).send("el Pokemon ya existe");}
    } catch (err) {
      res.status(400).send("Error en data");
    }
  }
  module.exports = {createPokemonDB}
// Ejemplo para POST
  // {
  //   "name": "bulbas2aur2",
  //   "image": "https://example.com/pikachu.png",
  //   "hp": 70,
  //   "attack": 55,
  //   "defense": 40,
  //   "speed": 90,
  //   "height": 0.4,
  //   "weight": 6.0,
  //   "types": ["Fire","Water"]
  // }
  