import React from "react";
import { MainNav, MainLinks, HeaderH1 } from './Styles';

export default function Header() {
  return (
    <header className="ui centered">
      <HeaderH1 className="ui center">Rick &amp; Morty Fan Page</HeaderH1>

      <MainNav>
        <MainLinks exact to={"/"}>Home</MainLinks>
        <MainLinks to={"/CharacterList"}>Characters</MainLinks>
      </MainNav>
    </header>
  );
}