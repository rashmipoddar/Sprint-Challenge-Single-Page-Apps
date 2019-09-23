import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";

import CharacterCard from './CharacterCard';
import SearchForm from "./SearchForm";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2px;
  margin: 2px;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters , setCharacters ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ allCharacters , setAllCharacters ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log('The response is ', response);
        // allCharacters = response.data.results
        setCharacters(response.data.results);
        setAllCharacters(response.data.results)
        console.log('all characters', allCharacters);
      }) 
      .catch(error => {
        console.log('The error is ', error);
      })  
  }, []);

  const getSearchTerm = (searchTerm) => {
    console.log('Search Term: ', searchTerm);
    console.log(allCharacters);
    const results = allCharacters.filter(character => {
      let joinedName = character.name.split(' ').join('').toLowerCase();
      return joinedName.includes(searchTerm);
    })
    setCharacters(results);
    console.log('the search result is ', results);

  }

  return (
    <section className="character-list">
      <h2>Characters</h2>
      <SearchForm characters={characters} getSearchTerm={getSearchTerm}/>
      <p>{`${characters.length} found`}</p>
      <Div>
      {characters.map(character => {
        return (
          <div key={character.id}>
          <CharacterCard character={character}/>
        </div> 
        ) 
      })}
      </Div>
    </section>
  );
}
