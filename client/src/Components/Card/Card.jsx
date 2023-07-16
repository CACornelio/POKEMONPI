import React from 'react';
import style from './card.module.css';
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  const { id, name, image, types } = pokemon;

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  
  

  return (
    <div className={style.card}>
      <Link to={`/details/${id}`}>
        <div className="info">
          <h2>{capitalizeFirstLetter(name)}</h2>
          <div className={style.images}>
            <img className="imgcard" src={image} alt="imagep" />
          </div>
          <div className={style.types}>
        {types?.map((t, index) => (
          <span key={index} style={{fontSize:"25px"}}>
            {t.name ? (
             <span> {capitalizeFirstLetter(t.name)}</span>
            ) : (
              <span>{capitalizeFirstLetter(t)}</span>
            )}
            {index < types.length - 1 && <span> - </span>}
          </span>
        ))}
      </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
