import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../Redux/actions";
// import "./SearchBar.css";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
  
  
    const handleSearchInputChange = (event) => {
      setName(event.target.value);
      
    };
  
    const handleSearchButtonClick = () => {
      dispatch(getNamePokemon(name));
      // dispatch(getIdPokemon(id))
    };
  
  return (
    <div>
    <input
    //  className={style.navinput} 
      type="text"
      value={name}
      onChange={handleSearchInputChange}
      placeholder="Busca tu Pokemon..."
    />
    <button
    //  className={style.buttonnav} 
     onClick={handleSearchButtonClick}>
      <span>Buscar</span>
    </button>
  </div>
  );
}