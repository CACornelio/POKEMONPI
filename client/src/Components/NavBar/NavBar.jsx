import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import style from "./navbar.module.css"
import { useDispatch } from "react-redux";
import { getIdPokemon, getNamePokemon } from '../../Redux/actions';








const NavBar = () => {
 


  return (
    <div className={style.navcontainer}>
        
        <div>
            <img src='' alt=''/>
        </div>
        <div className={style.linkcontainer}>
            <Link to="/home"> Home</Link>
            <Link to="/create"> Create Pokemon</Link>
        </div>
       
        
        </div>
  )
}

export default NavBar