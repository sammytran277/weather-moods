import React from 'react';
import './WeatherCard.css';
import { Card } from 'react-bootstrap';
import cloudy from './icons/cloudy.svg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard = () => {
  return (
    <Card className="col-md-1 col-sm-1">
      <Card.Title className="day">Sun</Card.Title>
      <img className="weather-icon" src={cloudy} alt="cloudy" height="50" width="50"></img>
      <div className="temp-container">
        <span className="temp-high">70 &deg;F</span>
        <span className="temp-low ml-2">60 &deg;F</span>
      </div>
      <div className="show-more">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </Card>
  );
}

export default WeatherCard;