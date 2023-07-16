import React from 'react'
import style from './createform.module.css'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { postPokemon,getTypes } from '../../Redux/actions'
//pokemon center color scheme for styling.
///1:29:22 del video de lucky repaso drive
///que no permita hacer un pokemon con el nombre duplicado. find or Create
const CreateForm = () => {

 const  dispatch = useDispatch();


  const [input, setInput] = useState({
    name:"",
    image:"",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
    
    })

    const [errors,setErrors] = useState({
      name:"Name is required",
      image:"Image is required",
      hp: "Hp is required",
      attack: "Attack is required",
      defense: "Defense is required",
      speed: "Speed is required",
      height: "Height is required",
      weight: "Weight is required",
      types: "Types is required",
      
    })


const validate =(input,name) => {
if(name === "name"){
if(input.name!==""){ setErrors({...errors, name:"" })}
else setErrors({...errors, name:"Name is required"})
}
if (name==="image"){
  if(input.image!=="") setErrors({...errors, image:"" })
  else setErrors({...errors, image:"image is required"})
}
if (name==="hp"){
  if(input.hp!=="") setErrors({...errors, hp:"" })
  else setErrors({...errors, hp:"hp is required"})
}
if (name==="attack"){
  if(input.attack!=="") setErrors({...errors, attack:"" })
  else setErrors({...errors, attack:"attack is required"})
}
if (name==="defense"){
  if(input.defense!=="") setErrors({...errors, defense:"" })
  else setErrors({...errors, defense:"defense is required"})
}
if (name==="speed"){
  if(input.speed!=="") setErrors({...errors, speed:"" })
else setErrors({...errors, speed:"speed is required"})
} 
if(name==="height"){
  if(input.height!=="") setErrors({...errors, height:"" })
  else setErrors({...errors, height:"height is required"})
}
if (name==="weight"){
  if(input.weight!=="") setErrors({...errors, weight:"" })
  else setErrors({...errors, weight:"weight is required"})
}
if(name==="types"){
  if(input.types!=="") setErrors({...errors, types:"" })
  else setErrors({...errors, types:"Types is required"})
}

}

////types ////
const types = useSelector((state) => state.types)

useEffect(() => {
  dispatch(getTypes());
}, [dispatch]);



function handleSelect(e) {
  const selectedType = e.target.value;
  if (input.types.length === 2 && !input.types.includes(selectedType)) {
    // Si ya se han seleccionado dos tipos y el tipo seleccionado no está en la lista,
    // no se permite agregar el tipo seleccionado.
    return;
  }
  
  if (input.types.includes(selectedType)) {
    // Si el tipo seleccionado ya está en la lista, se elimina.
    setInput({
      ...input,
      types: input.types.filter((type) => type !== selectedType)
    });
  } else {
    // Si el tipo seleccionado no está en la lista, se agrega.
    setInput({
      ...input,
      types: [...input.types, selectedType]
    });
  }
}


////types ////
 //////para desabilitar el boton si no esta lleno el formulario=> 
 const buttonDisabled = ()=>{
  for (let field in input) {
    if (input[field] === "") {
      return true;
    }
  }
  return false;
    }
  

//////

const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(postPokemon(input))

}
const handleChange = (event) => {
  console.log(event)
  setInput({
    ...input, 
    [event.target.name]: event.target.value
  })
  validate({
    ...input, 
    [event.target.name]: event.target.value}, event.target.name)
}


  return (
    <div className={style.form}>
      <div className={style.formtitle}>New pokemon creation form:</div>
      


      <form onSubmit={handleSubmit}>
        {console.log(input)}
        <div className={style.forminput}> 
            <label>Name:  </label>
            <input name='name' onChange={handleChange} type='text'></input>
            <p>{errors.name}</p>
        </div>
        <div className={style.forminput}> 
            <label>Image:  </label>
            <input name='image' onChange={handleChange} type='text'></input>
            <p>{errors.image}</p>
          </div>
        <div className={style.forminput}> 
            <label>HP:  </label>
            <input name='hp' onChange={handleChange} type='number'></input>
            <p>{errors.hp}</p>
          </div>
        <div className={style.forminput}> 
            <label>Attack:  </label>
            <input name='attack' onChange={handleChange} type='number'></input>
            <p>{errors.attack}</p>
          </div>
        <div className={style.forminput}> 
            <label>Defense:  </label>
            <input name='defense' onChange={handleChange} type='number'></input>
            <p>{errors.defense}</p>
            </div>
        <div className={style.forminput}> 
            <label>Speed:  </label>
            <input name='speed' onChange={handleChange} type='number'></input>
            <p>{errors.speed}</p>
             </div>
        <div className={style.forminput}> 
            <label>Height:  </label>
            <input name='height' onChange={handleChange} type='number'></input>
            <p>{errors.height}</p>
            </div>
        <div className={style.forminput}> 
            <label>Weight:  </label>
            <input name='weight' onChange={handleChange} type='number'></input>
            <p>{errors.weight}</p>
             </div>
        <div className={style.forminput}> 
            <label>Types:  </label>
            <select multiple onChange={(e) => handleSelect(e)}>
  {types.map((typ) => (
    <option
      value={typ.name}
      key={typ.name}
      disabled={input.types.length === 2 && !input.types.includes(typ.name)}
    >
      {typ.name}
    </option>
  ))}
</select>

            <p>{errors.types}</p>
            </div>
        <div className={style.submitbutton}> 
            <input disabled={buttonDisabled()} type='submit' ></input>
          </div>
      </form>
    </div>
  )
}

export default CreateForm