import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../Redux/actions";
import style from "./searchBar.module.css"

export default function SearchBar({setCurrentPage,CurrentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
  
  
    const handleSearchInputChange = (event) => {
      setName(event.target.value);
      
    };
  
    const handleSearchButtonClick = () => {
      if (!name.trim()) {
        // Si el campo de búsqueda está vacío o contiene solo espacios en blanco
        alert("Please enter a search query.");
      } else {
        dispatch(getNamePokemon(name));
        setCurrentPage(1);
      }
    };
  
  return (
    <div className={style.SearchBar}>
    <input
    //  className={style.navinput} 
      type="text"
      value={name}
      onChange={handleSearchInputChange}
      placeholder="Search Pokemon Name"
    />
    <button
    //  className={style.buttonnav} 
     onClick={handleSearchButtonClick}>
      <span>Buscar</span>
    </button>
  </div>
  );
}