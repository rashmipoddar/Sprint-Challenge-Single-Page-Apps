import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import CharacterCard from "./CharacterCard";

const SubHeader = styled.h2`
  font-size: 2rem;
`;

export default function SearchForm(props) {
  // console.log(props.characters);
  // const [ searchResults, setSearchResults ] = useState([]);
  
  
  
  const handleChange = (event) => {
    props.getSearchTerm(event.target.value);
    
  }

  return (
    

    <section className="search-form">
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    {/* {console.log('the search result is ', searchResults)} */}
    {/* <SubHeader>Search Result</SubHeader> */}
    {/* {searchResults.map(result => {
      return (
        <div key={result.id}>
          <CharacterCard character={result}/>
        </div>
      )
    })} */}
    
    </section>
  );
}
