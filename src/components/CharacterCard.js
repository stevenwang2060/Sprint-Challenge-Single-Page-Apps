import React from "react";
import { CharCard, Image, CharInfo } from './Styles';

export default function CharacterCard({character}) {
  return (
    <CharCard>
      <div>
        <Image src={character.image} alt={character.name}/>
      </div>
      <CharInfo>
        <h3>{character.name}</h3>
        <h4>{character.species}</h4>
        <h4>{character.status}</h4>
      </CharInfo>
    </CharCard>
  );
}