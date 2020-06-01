import React from 'react';
import './WeatherContainer.css';
import { CardGroup } from 'react-bootstrap';
import WeatherCard from './WeatherCard/WeatherCard';

const WeatherContainer = () => {
  return (
    <CardGroup className="weather-container justify-content-center">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </CardGroup>
  );
}

export default WeatherContainer;
