import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import style from "./navbar.module.css"
import SearchBar from '../SearchBar/searchBar'
import { useDispatch } from "react-redux";
import { getIdPokemon, getNamePokemon } from '../../Redux/actions';








const NavBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
 const [id,setId] = useState("")


  const handleSearchInputChange = (event) => {
    setName(event.target.value);
    
  };

  const handleSearchButtonClick = () => {
    dispatch(getNamePokemon(name));
    // dispatch(getIdPokemon(id))
  };


  return (
    <div className={style.navcontainer}>
        
        <div>
            <img src='' alt=''/>
        </div>
        <div className={style.linkcontainer}>
            <Link to="/home"> Home</Link>
            <Link to="/create"> Create Pokemon</Link>
        </div>
       
        <SearchBar/>
        </div>
  )
}

export default NavBar