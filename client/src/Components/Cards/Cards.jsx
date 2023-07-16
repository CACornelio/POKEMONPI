import React from 'react'
import Card from '../Card/Card'
import style from './cards.module.css'
const Cards = ({pokemon}) => {
  return (
    <div>
    <div className={style.maincont}>Contenedor de Cards</div> 
    <div className={style.cardscont}>
    {pokemon?.map(pokemon =>(                //mapeo de las props de pokemon solicitadas por el componente cards
    <Card key={pokemon.id} pokemon={pokemon}/>))}
     
    {/* <Card name={"Bulbasaur"} type={"Grass"} image={"Placeholder"}/>
    <Card name={"Pikachu"} type={"Electric"} image={"Placeholder"}/>
    <Card name={"Eevee"} type={"Normal"} image={"Placeholder"}/>
    <Card name={"Squirtle"} type={"Water"} image={"Placeholder"}/>
    <Card name={"Charmander"} type={"Fire"} image={"Placeholder"}/>
    <Card name={"Butterfree"} type={"Bug"} image={"Placeholder"}/>
    <Card name={"Ekans"} type={"Poison"} image={"Placeholder"}/> */}

    </div>
    </div>
    
    
    
    
    )
}

export default Cards