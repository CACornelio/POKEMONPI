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
      types: "",
      
    })


const validate =(input,name) => {
if(name === "name"){
if(input.name!==""){ setErrors({...errors, name:"" })}
else setErrors({...errors, name:"Name is required"})
}
if (name === "image") {
  if (input.image !== "") {
    // Use a regular expression to check if the input value is a valid URL
    const urlPattern = new RegExp(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
    );
    if (urlPattern.test(input.image)) {
      setErrors({ ...errors, image: "" });
    } else {
      setErrors({ ...errors, image: "Invalid URL format" });
    }
  } else {
    setErrors({ ...errors, image: "Image is required" });
  }
}
if (name === "hp") {
  if (input.hp !== "") {
    if (!isNaN(input.hp)) {
      setErrors({ ...errors, hp: "" });
    } else {
      setErrors({ ...errors, hp: "Input must be a number" });
    }
  } else {
    setErrors({ ...errors, hp: "HP is required" });
  }
}
if (name === "attack") {
  if (input.attack !== "") {
    if (!isNaN(input.attack)) {
      setErrors({ ...errors, attack: "" });
    } else {
      setErrors({ ...errors, attack: "Input must be a number" });
    }
  } else {
    setErrors({ ...errors, attack: "Attack is required" });
  }
}
if (name === "defense") {
  if (input.defense !== "") {
    if (!isNaN(input.defense)) {
      setErrors({ ...errors, defense: "" });
    } else {
      setErrors({ ...errors, defense: "Input must be a number" });
    }
  } else {
    setErrors({ ...errors, defense: "Defense is required" });
  }
}
if (name === "speed") {
  if (input.speed !== "") {
    if (!isNaN(input.speed)) {
      setErrors({ ...errors, speed: "" });
    } else {
      setErrors({ ...errors, speed: "Input must be a number" });
    }
  } else {
    setErrors({ ...errors, speed: "Speed is required" });
  }
}
if (name === "height") {
  if (input.height !== "") {
    if (!isNaN(input.height)) {
      setErrors({ ...errors, height: "" });
    } else {
      setErrors({ ...errors, height: "Input must be a number" });
    }
  } else {
    setErrors({ ...errors, height: "Height is required" });
  }
}
if (name === "weight") {
  if (input.weight !== "") {
    if (!isNaN(input.weight)) {
      setErrors({ ...errors, weight: "" });
    } else {
      setErrors({ ...errors, weight: "Input must be a number" });
    }
  } else {
    setErrors({ ...errors, weight: "Weight is required" });
  }
}
if (name === "types") {
  if (input.types.length > 0) setErrors({ ...errors, types: "" });
  else setErrors({ ...errors, types: "Types is required" });
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
    // If already selected two types and the selected type is not in the list,
    // do not allow adding the selected type.
    return;
  }

  if (e.target.checked) {
    // If the checkbox is checked, add the selected type to the types array.
    setInput({
      ...input,
      types: [...input.types, selectedType],
    });
  } else {
    // If the checkbox is unchecked, remove the selected type from the types array.
    setInput({
      ...input,
      types: input.types.filter((type) => type !== selectedType),
    });
  }
}



////types ////
 //////para desabilitar el boton si no esta lleno el formulario=> 
 const buttonDisabled = () => {
  // Check if the "types" field is empty
  if (input.types.length === 0) {
    return true;
  }

  // Check if any error message is not empty for other fields
  for (let error in errors) {
    if (error !== "types" && errors[error] !== "") {
      return true;
    }
  }

  return false;
};


  

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
            <input name='name' onChange={handleChange} type='text'  className={style.textInput} placeholder='Name'></input>
            <p>{errors.name}</p>
        </div>
        <div className={style.forminput}> 
            <label>Image:  </label>
            <input name='image' onChange={handleChange} type='text'  className={style.textInput}  placeholder='Image URL'></input>
            <p>{errors.image}</p>
          </div>
        <div className={style.forminput}> 
            <label>HP:  </label>
            <input name='hp' onChange={handleChange} type='number'  className={style.textInput}  placeholder='HP'></input>
            <p>{errors.hp}</p>
          </div>
        <div className={style.forminput}> 
            <label>Attack:  </label>
            <input name='attack' onChange={handleChange} type='number'  className={style.textInput}  placeholder='Attack'></input>
            <p>{errors.attack}</p>
          </div>
        <div className={style.forminput}> 
            <label>Defense:  </label>
            <input name='defense' onChange={handleChange} type='number'  className={style.textInput}  placeholder='Defense'></input>
            <p>{errors.defense}</p>
            </div>
        <div className={style.forminput}> 
            <label>Speed:  </label>
            <input name='speed' onChange={handleChange} type='number'  className={style.textInput}  placeholder='Speed'></input>
            <p>{errors.speed}</p>
             </div>
        <div className={style.forminput}> 
            <label>Height:  </label>
            <input name='height' onChange={handleChange} type='number'  className={style.textInput}  placeholder='Height'></input>
            <p>{errors.height}</p>
            </div>
        <div className={style.forminput}> 
            <label>Weight:  </label>
            <input name='weight' onChange={handleChange} type='number'  className={style.textInput}  placeholder='Weight'></input>
            <p>{errors.weight}</p>
             </div>
        <div className={style.forminput}> 
            <label>Types:  </label>
            <div className={style.typechecks}>
    {types.map((typ) => (
      <label key={typ.name}>
        <input
          type="checkbox"
          value={typ.name}
          checked={input.types.includes(typ.name)}
          onChange={(e) => handleSelect(e)}
          disabled={
            input.types.length === 2 && !input.types.includes(typ.name)
          }
         
        />
        {typ.name}
      </label>
    ))}
  </div>

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