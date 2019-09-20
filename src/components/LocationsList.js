import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import LocationCard from "./LocationCard";

const Div = styled.div`
  text-align: center;
  
`;

export default function LocationsList() {
  const [ locations , setLocations ] = useState([])

useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/location/')
    .then(response => {
      // console.log('The response is ', response);
      setLocations(response.data.results);
    }) 
    .catch(error => {
      console.log('The error is ', error);
    })  
}, []);

return (
  <section>
    <h2>Locations</h2>
    <Div>
    {locations.map(location => {
      return (
        <div key={location.id}>
        <LocationCard name={location.name}/>
      </div> 
      ) 
    })}
    </Div>
  </section>
);
}

