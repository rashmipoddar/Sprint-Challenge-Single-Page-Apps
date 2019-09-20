import React from "react";
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";

const Div = styled.div`
  background: #cceffa;
`;

export default function App() {
  return (
    <Div>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      {/* <Route exact path='/characters' component={SearchForm} /> */}
      <Route exact path='/characters' component={CharacterList} />
    </Div>
  );
}
