import React, { useState } from 'react';
import './SearchContainer.css';
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const GENRES = [
  'All Genres',
  'Hip-Hop', 
  'Pop', 
  'Techno', 
  'R&B', 
  'Punk', 
  'Country', 
  'Indie', 
  'Latin', 
  'Jazz',
  'Christian'
];

const SearchContainer = () => {
  const [genre, setGenre] = useState("");
  const [city, setCity] = useState("");
  const [userInput, setUserInput] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(userInput);
  }

  return (
    <div className="search-container">
      <h1 className="text-white mb-5 text-center">Need music based on the weather?</h1>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Form.Group>
          <Form.Label className="text-white">
            1. Select your music genre
          </Form.Label>
          <Form.Control as="select" onChange={(event) => setGenre(event.target.value)}>
            {GENRES.map(genre => <option key={genre}>{genre}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-white">2. Enter your city</Form.Label>
          <InputGroup onChange={(event) => setUserInput(event.target.value)}>
            <Form.Control type="text" placeholder="City"></Form.Control>
            <InputGroup.Append 
              onClick={(event) => handleSubmit(event)} 
              className="magnifying-glass-container"
            >
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
      <h3 className="text-white">{(genre !== "") ? genre : "No genre selected"}</h3>
      <h3 className="text-white">{(city !== "") ? city : "No city entered"}</h3>
    </div>
  );
}

export default SearchContainer;