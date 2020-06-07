import React from 'react';
import './WeatherCard.css';
import { Card, Accordion, Button } from 'react-bootstrap';
import clear from './icons/clear.svg';
import clouds from './icons/clouds.svg';
import rain from './icons/rain.svg';
import snow from './icons/snow.svg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard = (props) => {
  const getIcon = () => {
    switch(props.data.weather[0].main.toLowerCase()) {
      case 'clear':
        return clear;
      case 'clouds':
        return clouds;
      case 'rain':
        return rain;
      case 'snow':
        return snow;
      default:
        return clear;
    }
  }

  const getDay = () => {
    let d = new Date(props.data.dt * 1000);
    switch (d.getDay()) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:
        return 'Error';
    }
  }

  return (
    <Card className="col-md-1 col-sm-1">
      <Card.Title className="day">{getDay()}</Card.Title>
      <img 
        className="weather-icon" 
        src={getIcon()} 
        alt={props.data.weather[0].main.toLowerCase()} 
        height="50" 
        width="50" 
      />
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