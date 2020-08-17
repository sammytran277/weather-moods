import React from 'react';
import './WeatherCard.css';
import { Card, Accordion } from 'react-bootstrap';
import clear from './icons/clear.svg';
import clouds from './icons/clouds.svg';
import rain from './icons/rain.svg';
import snow from './icons/snow.svg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard = ({ data, unit, onclick }) => {
  const getIcon = () => {
    switch(data.weather[0].main.toLowerCase()) {
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
    let d = new Date(data.dt * 1000);
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

  const convertUnits = (temp) => {
    if (unit === "F") {
      return Math.round(temp);
    } else {
      return Math.round((temp - 32) * 5 / 9);
    }
  }

  return (
    <Accordion.Toggle className="accordion-btn" eventKey="0" onClick={onclick}>
      <Card.Title className="day">{getDay()}</Card.Title>
      <img 
        className="weather-icon" 
        src={getIcon()} 
        alt={data.weather[0].main.toLowerCase()} 
        height="50" 
        width="50" 
      />
      <div className="temp-container">
        <span className="temp-high">{convertUnits(data.temp.max)} &deg;{unit}</span>
        <span className="temp-low ml-2">{convertUnits(data.temp.min)} &deg;{unit}</span>
      </div>
      
      <FontAwesomeIcon className="arrow-down" icon={faAngleDown} />
    </Accordion.Toggle>
  );
}

export default WeatherCard;