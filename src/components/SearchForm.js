import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const SubHeader = styled.h2`
  font-size: 2rem;
`;

export default function SearchForm(props) {
  // console.log(props.characters);
  const characterNames = props.characters.map(character => character.name);
  // console.log(characterNames);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
      const results = characterNames.filter(name => {
        return name.toLowerCase().includes(searchTerm);
      })
      setSearchResults(results);
  }, [searchTerm])

  return (
    

    <section className="search-form">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    <ul>
      {/* {console.log('the search result is ', searchResults)} */}
      <SubHeader>Search Result</SubHeader>
      {searchResults.map(item => {
        return (
          <div key={item}>
            <li>{item}</li>
          </div>
        )
      })}
    </ul>  
    </section>
  );
}
