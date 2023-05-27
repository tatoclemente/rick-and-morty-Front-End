import React, { useState } from "react";

import { SearchContainer } from './styles.js'

export default function SearchBar(props) {
  const [id, setId] = useState();
  const handleChange = (event) => {
    const {value} = event.target
    setId(value)
  }
  
  return (
    <SearchContainer>
      <input type='search' id="search" onChange={handleChange} placeholder="Ingrese un numero entre 1 y 826..."/>
      <button onClick={()=>{props.onSearch(id)}}>Agregar</button>
      <button onClick={()=>{props.randomSearch()}}>Random</button>
    </SearchContainer>
  );
}

