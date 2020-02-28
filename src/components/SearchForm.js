import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import { ListSection, ListDiv, Card, SearchH3, SearchBox } from './Styles';

export default function SearchForm({ characters }) {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = characters.filter(char =>
      char.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <ListSection className="search-form">
      <SearchH3>Search for your Favorite Character by Name!</SearchH3>
      <SearchBox
        type='text'
        placeholder='Start typing...'
        value={searchTerm}
        onChange={handleChange}
      />

      <ListDiv>
        {searchResults.map(item => (
          <Card>
            <CharacterCard key={item.id} character={item} />
          </Card>
        ))}
      </ListDiv>
    </ListSection>
  );
}