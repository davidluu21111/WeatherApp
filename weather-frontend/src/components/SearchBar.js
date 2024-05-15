import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
    setCity('');
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter city name"
          value={city}
          onChange={handleChange}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
