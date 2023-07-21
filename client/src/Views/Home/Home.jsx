import React, { useEffect} from 'react'
import Cards from '../../Components/Cards/Cards'
import style from './home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon, filterByType, filterIfCreated, orderByname, orderByAttack } from '../../Redux/actions'
import { useState } from 'react'
import Paginate from '../../Components/Paginate/Paginate'
import SearchBar from '../../Components/SearchBar/searchBar'
const Home = () => {


const pokemon = useSelector((state)=> state.pokemons)
const dispatch = useDispatch()
const[orden, setOrden] = useState("")
const[attack, setAttack] = useState("")

///pagination///
const [currentPage, setCurrentPage] = useState(1);
const [pokemonsPerPage] = useState(12);
const indexOfLastPokemon = currentPage * pokemonsPerPage;
const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
const currentPokemons = pokemon.slice(
  indexOfFirstPokemon,
  indexOfLastPokemon
);


const prevPage =() =>{
const prevp = currentPage -1;
if(prevp < 1) return;
setCurrentPage(prevp);

}

const nextPage =() =>{
const nextp = currentPage + 1;

if(indexOfLastPokemon >= pokemon.length) return;
setCurrentPage(nextp);
}
////pagination /////

///filters ///


function handleFilterType(e) {
  e.preventDefault();
  dispatch(filterByType(e.target.value));
  setCurrentPage(1);
}

function handleFilterCreated(e) {
  e.preventDefault();
  dispatch(filterIfCreated(e.target.value));
  setCurrentPage(1);
}

function handleSort (e){
  e.preventDefault();
  dispatch(orderByname(e.target.value))
  setCurrentPage(1);
  setOrden(`Ordenado ${e.target.value}`)
};

function handleAttack(e) {
  e.preventDefault();
  dispatch(orderByAttack(e.target.value));
  setAttack(e.target.value);
  setCurrentPage(1);
}
///filters ///


useEffect(() => {

dispatch(getPokemon())

}, [])

// console.log(pokemon)

  return (
    <div>
      
    <div className={style.homecontainer}>
    
    <h1>Kanto National Pokedex</h1>
    {/* FILTERS AND ORDERING */}
    <div className={style.filters}>
    
           <div >
            <span>Tipos   </span>
            <select onChange={e => handleFilterType(e)}>
                        <option value='all'>All</option>
                        <option value='grass'>Grass</option>
                        <option value='poison'>Poison</option>
                        <option value='fire'>Fire</option>
                        <option value='flying'>Flying</option>
                        <option value='water'>Water</option>
                        <option value='bug'>Bug</option>
                        <option value='normal'>Normal</option>
                        <option value='electric'>Electric</option>
                        <option value='ground'>Ground</option>
                        <option value='fairy'>Fairy</option>
                        <option value='rock'>Rock</option>
                        <option value='ghost'>Ghost</option>
                        <option value='steel'>Steel</option>
                        <option value='psychic'>Psychic</option>
                        <option value='ice'>Ice</option>
                        <option value='dragon'>Dragon</option>
                        <option value='fighting'>Fighting</option>
                        <option value='shadow'>Shadow</option>
                        <option value='unknown'>Unknown</option>
                    </select>
          </div>
      <div>
        <span>Order by Alphabet  </span>
        <select onChange={e => handleSort(e)}>
          <option value="all">Alphabetical</option>
          <option value="ascPokemon">[A-Z]</option>
          <option value="descPokemon">[Z-A]</option>
        </select>
      </div>
      <div>
        <span> Created   </span>
        <select onChange={e => handleFilterCreated(e)}>
        <option value='all'>All</option>
        <option value='created'>Created by User</option>
        <option value='api'>API</option>
        </select>
      </div>
      <div>
        <span> Order By Attack  </span>
        <select  onChange={e => handleAttack(e)}>
          <option value="attack"> Attack</option>
          <option value="ascA">Least Attack</option>
          <option value="descA">Highest Attack</option>
        </select>
        </div> 
        <SearchBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div> 
      {/* FILTERS AND ORDERING */}
<div className={style.homepaginate}>
    <button onClick={prevPage}>Previous Page</button>
   <Paginate pokemon={pokemon.length} pokemonPerPage={pokemonsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    <button onClick={nextPage}>Next Page</button>
    </div>
    <Cards pokemon={currentPokemons}> </Cards>
    </div>
 </div>
    )
}

export default Home