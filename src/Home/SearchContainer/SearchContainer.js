import React from 'react';
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
  return (
    <div className="search-container">
      <h1 className="text-white mb-5 text-center">Need music based on the weather?</h1>
      <Form>
        <Form.Group>
          <Form.Label className="text-white">
            1. Select your music genre
          </Form.Label>
          <Form.Control as="select">
            {GENRES.map(genre => <option key={genre}>{genre}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-white">2. Enter your city</Form.Label>
          <InputGroup>
            <Form.Control type="text" placeholder="City"></Form.Control>
            <InputGroup.Append className="magnifying-glass-container">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchContainer;