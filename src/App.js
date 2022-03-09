import React from 'react';
import { useState } from "react";

import './App.css';
import AddFood from './components/AddFood';
import Foodbox from './components/Foodbox';
import Search from './components/Search';
import allFoods from "./foods.json"

function App() {

  // State para acceder al json
  const [ food, setFood ] = useState (allFoods)

  //mostrar o no el formulario
  const [ showForm, setShowForm ] = useState (false)

  const [ foodToRender, setFoodToRender ] = useState(allFoods) 

  const addMoreFood = (foodOne) => {
    setFood ( [ ...food, foodOne ] )
    setFoodToRender ( [ ...food, foodOne ] )
  }

  //haciendo el Search
  const searchFood = (searchQuery) => {

    const filterFood = food.filter((eachFood) => {
      return eachFood.name.includes(searchQuery)
    })
    setFoodToRender(filterFood)
  }


  return (
    <div className="App">

    <h1>IRONHACKERS LIKE TO KNOW WHAT THEY EAT.COM</h1>

    <button  onClick={ () => setShowForm(!showForm) } >{ showForm ? "Ocultar Formulario" : "Ver Formulario" }</button>

    { showForm && <AddFood setFood={addMoreFood} /> }

    <br />
    <br />

  <Search searchFood={searchFood}/>
 

  <br />
  <br />

   {/* Display de toda la comida que hay */}
   { foodToRender.map ((eachFood, index) => {
     return (
    <Foodbox foodProps = {eachFood} key = { index + eachFood.name} />
     )
   })}
      
    </div>
  );
}

export default App;
