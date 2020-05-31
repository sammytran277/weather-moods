import React from 'react';
import './WeatherCard.css';
import { Card } from 'react-bootstrap';
import cloudy from './icons/cloudy.svg';

const data = {
  avg: 70,
  low: 60,
  high: 80
};

const WeatherCard = () => {
  return (
    <Card className="weather-card">
      <div className="weather-icon">
        <img src={cloudy} alt="cloudy" height="50" width="50"></img>
      </div>
      <div className="temp-container">
        <div className="temp-avg">{data.avg}</div>
        <div className="temp-extrema">
          <div className="temp-low">Low: {data.low}</div>
          <div className="temp-high ml-2">High: {data.high}</div>
        </div>
      </div>
    </Card>
  );
}

export default WeatherCard;