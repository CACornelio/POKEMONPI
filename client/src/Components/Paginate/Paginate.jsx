import React from 'react';
import styles from './paginate.module.css';

const Paginate = ({ pokemon, pokemonPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(pokemon / pokemonPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => { // 
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`${styles.button} ${currentPage === page ? styles.active : ''}`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Paginate;
