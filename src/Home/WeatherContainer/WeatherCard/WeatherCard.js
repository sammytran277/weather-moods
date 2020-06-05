import React from 'react';
import './WeatherCard.css';
import { Card, Accordion, Button } from 'react-bootstrap';
import cloudy from './icons/cloudy.svg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard = (props) => {
  return (
    <Card className="col-md-1 col-sm-1">
      <Card.Title className="day">Sun</Card.Title>
      <img className="weather-icon" src={cloudy} alt="cloudy" height="50" width="50"></img>
      <div className="temp-container">
        <span className="temp-high">{Math.round(props.data.temp.max)} &deg;F</span>
        <span className="temp-low ml-2">{Math.round(props.data.temp.min)} &deg;F</span>
      </div>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        <FontAwesomeIcon className="arrow-down" icon={faAngleDown} />
      </Accordion.Toggle>
    </Card>
  );
}

export default WeatherCard;