import React, { useState } from 'react'

function Search(props) {

    const [ search, setSearch ] = useState("")

  const handleSearch = (event) => {
      setSearch(event.target.value)
      props.searchFood(event.target.value) // lo que le paso a la función que hace la búsqueda en App acaso?
  }


  return (
    <div>

    <label htmlFor="search"> Buscar: </label>
    <input type="text" name="search" value={search} onChange={ handleSearch }/>

    </div>
  )
}

export default Search;