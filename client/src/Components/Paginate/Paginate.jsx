import React from "react";
import style from "./paginate.module.css";

export default function Pagination({ pokemonPerPage, pokemon, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(pokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={style.pagnav }>
      <ul className={style.navul }>
        { pageNumbers &&
          pageNumbers.map(number =>(
            <li className={style.navli } key={number}>
              <a onClick={() => paginado(number)}>{number}</a> 
            </li>
          ))}
      </ul>
    </nav>
  );
}