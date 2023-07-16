import axios from 'axios';
import { FILTER_BY_TYPES, GET_POKEMON, GET_TYPES,GET_NAME_POKEMON,GET_ID_POKEMON,FILTER_IF_CREATED,ORDER_BY_ATTACK,ORDER_BY_NAME } from './actiontypes';

export function postPokemon(input){ //post working but allows duplicates
    return async function (dispatch) { //siempre que trabajes con una funcion async tienes que usar try catch. 
        try {
            const response = await axios.post("http://localhost:3001/pokemons",input )
            alert("Pokemon Created Successfully")
            console.log(response);

        } catch (error) {
            console.log(error);
            alert("Pokemon Creation error: " + error.response.data.error);
        }

    }

} 

export function getPokemon(){ //working
    return async function (dispatch) { //siempre que trabajes con una funcion async tienes que usar try catch. 
        try {
            const response = await axios.get("http://localhost:3001/pokemons" )
        dispatch({
            type: GET_POKEMON,
            payload: response.data
        })
            console.log(response);

        } catch (error) {
            console.log(error);
            alert( error.response.data.error);
        }

    }

} 
export function getTypes() { //working
    return async function (dispatch) {
      try {
        const info = await axios.get("http://localhost:3001/types");
        const types = info.data.map((name) => ({ id: name.id, name: name.name }));
        dispatch({
          type: GET_TYPES,
          payload: types,
        });
        console.log(types);
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
    };
  }
  


export function getNamePokemon(name){
    return async function (dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch({
                type: GET_NAME_POKEMON,
                payload: json.data
            })
        } catch(error){
           console.log(error) 
        }
    }
    
    }
    
    export function getIdPokemon(id){
        
        return async function (dispatch){
            try {
                let json = await axios.get(`http://localhost:3001/pokemons/${id}`);
                console.log(json.data);
                return dispatch({
                    type: GET_ID_POKEMON,
                    payload: json.data
                })
            } catch(error){
               console.log(error) 
            }
        }
        
        }

////filters /// 

export function filterByType(payload) {
    console.log(payload)
    return {
        type: FILTER_BY_TYPES,
        payload
    }
}

export function filterIfCreated(payload){
    return{
        type: FILTER_IF_CREATED,
        payload
    } 
}

export function orderByname(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByAttack(payload){
    return {
        type: ORDER_BY_ATTACK,
        payload
    }  
}


////filters ///