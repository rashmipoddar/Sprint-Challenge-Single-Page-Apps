import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 5px;
  margin: 5px;
`;

const Header = styled.h1`
  text-align: center;
`;

export default function CharacterCard(props) {
  return (
    <Div>
      {/* {console.log(props.character)} */}
      <Header>{props.character.name}</Header>
      <img src={props.character.image} alt='Character Image' />
      <h2>{props.character.species}</h2>
      <h2>{props.character.status}</h2>
    </Div>  
  );
}
