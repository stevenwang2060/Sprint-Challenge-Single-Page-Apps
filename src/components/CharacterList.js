import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import { ListSection, NavDiv, ListDiv, ListLinks, Card } from './Styles';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error("Error with Character List call: ", error);
        });
    }

    getCharacters();
  }, []);
  console.log(characters);

  return (
    <ListSection className="character-list">
      <NavDiv>
        <ListLinks to={"/CharacterList/SearchForm"}>Find your Favorites</ListLinks>
        <ListLinks to={"/CharacterList"}>All of the Characters</ListLinks>
      </NavDiv>

      <Switch>
        <Route path="/CharacterList/SearchForm">
          <SearchForm characters={characters} />
        </Route>
        <Route path="/CharacterList">
          <ListDiv>
            {characters.map(char => (
              <Card>
                <CharacterCard key={char.id} character={char} />
              </Card>
            ))}
          </ListDiv>
        </Route>
      </Switch>
    </ListSection>
  );
}