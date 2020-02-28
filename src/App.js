import React from "react";
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from './components/CharacterList';
import { Page } from './components/Styles';


export default function App() {
  return (
    <Page>
      <Header />
      <Switch>
        <Route path='/CharacterList'>
          <CharacterList />
        </Route>
        <Route path='/'>
          <WelcomePage />
        </Route>
      </Switch>
    </Page>
  );
}