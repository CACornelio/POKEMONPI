import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIdPokemon } from "../../Redux/actions";
import { Link } from "react-router-dom";
import style from "./detail.module.css";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const [state, setState] = useState({
    loading: true,
  });


  useEffect(() => {
    dispatch(getIdPokemon(id)); 

    
    setTimeout(() => {
      setState({ ...state, loading: false });
    }, 1200);
  }, [dispatch, id]);

  const myPokemon = useSelector((state) => state.detail);

  return (
    <div>
    
      <div className={style.detail }>
        
        {state.loading ? (
          <p className={style.detailp }><img src={"https://i.imgur.com/kxd89UN.gif"} alt="" className={style.loadingimg} /></p>
        ) : myPokemon.name ? (
          <div>
            <h1 className={style.detailh1 }>{myPokemon.name}</h1>
            <div detailimg >
            {myPokemon.img || myPokemon.image ? (
                <img src={myPokemon.img || myPokemon.image} alt="" />
            ) : (
              <img src={"https://cdn.dribbble.com/users/1770381/screenshots/5500073/media/99f44446ca2bf79d18fca7403c712d1c.png?compress=1&resize=400x300&vertical=center"} alt="Imagen por defecto" />
            )}</div>
            <div className={style.detailp }>
            <h2>HP:</h2>  <p> {myPokemon.health || myPokemon.hp}</p>
            <h2>Attack:</h2> <p> {myPokemon.attack}</p>
            <h2>Defense:</h2>  <p>{myPokemon.defense}</p>
            <h2>Speed:</h2> <p>{myPokemon.speed}</p>
            <h2>Height:</h2> <p> {myPokemon.height}</p>
            <h2>Weight:</h2>  <p>{myPokemon.weight}</p>
            <h2>Type:</h2>
            <div className={style.detailtype }>
            
              {myPokemon.types?.map((t, index) => (
                <span key={index}>
                  
                  {t.name ? (
                    <span>{t.name}</span>
                  ) : (
                    <span>{t}</span>
                  )}
                  {index < myPokemon.types.length - 1 && <span> -</span>}
                </span>
              ))}</div>
            </div>
          </div>
        ) : (
          <p className={style.detail404 }>Pokemon not found   <img src={"https://cdn.dribbble.com/users/1770381/screenshots/5500073/media/99f44446ca2bf79d18fca7403c712d1c.png?compress=1&resize=400x300&vertical=center"} alt="Imagen por defecto" /> </p>
        
        )}
        <div >
      <Link to="/home">
        <button className={style.detaillink}>Return Home</button>
      </Link>
      </div>
      </div>
      
    </div>
  );
}