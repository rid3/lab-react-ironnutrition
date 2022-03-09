import React, { useState } from 'react'

function AddFood(props) {

    const [ name, setName ] = useState ("")
    const [ calories, setCalories ] = useState ("")
    const [ image, setImage ] = useState ("")


    const handleSubmit = (event) => {
        event.preventDefault() //previendo el comportamiento predeterminado de renderizar 
        //console.log("yas") //chequeo que ande el botón
       //vía props le mandas la funcion del state que cambia el estado del array
    //    const foodCopy = [...props.food]
    //    foodCopy.push( {name, calories, image} )
    //    props.setFood(foodCopy)
    props.setFood( { name, calories, image } )
    }

    //funcion para que el value que le pasas no sea definitivo. que puedas cambiarlo. 
    const handleNameChange = (event) => {
        setName(event.target.value)  //cambias el valor de name con lo que se escribió en el input. 
    }
    const handleCaloriesChange = (event) => {
        setCalories(event.target.value)
    }
    const handleImageChange = (event) => { //el evento es lo que cambia el estado
        setImage(event.target.value)
    }



  return (
    <div>

    <form onSubmit = { handleSubmit } >
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={name} onChange={ handleNameChange} />
        <br />
        <br />
        <label htmlFor="calories">Number of calories: </label>
        <input type="number" name="calories" value={calories} onChange={ handleCaloriesChange }/>
        <br />
        <br />
        <label htmlFor="image">Image: </label>
        <input type="url" name="image" value={image} onChange={ handleImageChange } /> 
        {/* url como str tag img */}
        <br />
        <br />

        <button>Add Food</button>
    </form>

    </div>
  )
}

export default AddFood