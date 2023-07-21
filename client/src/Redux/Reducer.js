import { GET_POKEMON, GET_ID_POKEMON, GET_TYPES,GET_NAME_POKEMON, FILTER_BY_TYPES, FILTER_IF_CREATED, ORDER_BY_NAME, ORDER_BY_ATTACK } from "./actiontypes";


let initialState ={
    pokemons: [],  //copia del estado de all pokemons que usaremos para sort y filter
    pokemonsfiltered: [], 
    pokemonsfiltered2:[], //
    allPokemons: [],
    detail: [],
    types: [],

};


function rootReducer(state = initialState, action){
switch (action.type) {
    case GET_POKEMON:
        return{
            ...state, 
            allPokemons: action.payload,
            pokemons: action.payload,
            pokemonsfiltered:action.payload,
                pokemonsfiltered2:action.payload,
        }
       
        case GET_TYPES:
            return {
              ...state,
              types: action.payload
            };

            ////FILTERS///

            case FILTER_BY_TYPES: {
              let filtered = [...state.allPokemons];
            
              if (action.payload === "all") {
                filtered = state.allPokemons;
              } else {
                filtered = filtered.filter((poke) => {
                  if (poke.id.toString().includes("-")) {
                    return poke.types.some((type) => action.payload.includes(type.name));
                  } else {
                    return poke.types.some((type) => action.payload.includes(type));
                  }
                });
              }
            
              return {
                ...state,
                pokemons: filtered,
                pokemonsfiltered:filtered,
                pokemonsfiltered2:filtered,
              };
            }
                // action.payload === "all"
                //   ? state.allPokemons
                  // :  state.allPokemons.filter((el) =>
                  //     el.types.some((type) => action.payload.includes(type))
                  //   ); 
              
              
            
              case FILTER_IF_CREATED: {
                let filtrado;
            
                if (action.payload === "created") {
                  filtrado = state.pokemonsfiltered.filter(el => typeof el.id !== 'number') 
                } 
                if(action.payload === "api") {filtrado = state.pokemonsfiltered2.filter(el=> typeof el.id === 'number')}
                  
                  return{
                    ...state,
                    pokemons: action.payload === "all" ? state.pokemonsfiltered : filtrado
                  }
              }
            
              case ORDER_BY_NAME: {
                
                let sortedArr = (action.payload === "ascPokemon" ?
                state.pokemons.sort(function (a, b){ 
                  if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1; 
                  } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1; // Si la función de comparación devuelve un valor negativo, significa que el primer elemento (a) debe ser ordenado antes que el segundo elemento (b).
                  } else {
                    return 0;
                  }
                  }) :
                  state.pokemons.sort(function (a, b){
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                      return -1;
                    } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                }))
                
                return {
                  ...state,
                  pokemons: action.payload === "all" ? state.pokemons : sortedArr
                }
              }
            
              case GET_NAME_POKEMON:{
                return{
                  ...state,
                  pokemons: action.payload
                }}
            
                case GET_ID_POKEMON:{
                  return{
                    ...state,
                    detail: action.payload
                  }}
            
                case ORDER_BY_ATTACK: {
                  let sortedArr = (action.payload === "descA" ?
                  state.pokemons.sort((a, b) => b.attack - a.attack) :
                  state.pokemons.sort((a, b) => a.attack - b.attack));
                return {
                  ...state,
                  pokemons:    sortedArr
                };
               }
            
            ////FILTERS///
    default: return state
        
}

}

export default rootReducer;