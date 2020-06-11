import React, { useState } from 'react';
import './WeatherContainer.css';
import { CardGroup, Accordion, Card } from 'react-bootstrap';
import WeatherCard from './WeatherCard/WeatherCard';

const WeatherContainer = (props) => {
  const [unit, setUnit] = useState("F");

  const createWeatherCards = () => {
    return props.data.daily.slice(0, 7).map(day => { 
      return (
        <WeatherCard key={day.dt} data={day} unit={unit} />
      );
    });
  }

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <h2 className="mt-3 text-center">
            Seven day weather forecast for 
            <span className="city">{" " + props.city + ", "}</span> in
            <span
              className={(unit === "F") ? "" : "inactive"} 
              style={{"cursor": "pointer"}} 
              onClick={() => setUnit("F")}
            > &deg;F </span> | 
            <span 
              className={(unit === "C") ? " ": "inactive"}
              style={{"cursor": "pointer"}}  
              onClick={() => setUnit("C")}
            > &deg;C</span>:
          </h2>
          <CardGroup className="weather-container justify-content-center">
            {createWeatherCards()}
          </CardGroup>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          {/* This Card.Body will need to become its own component */}
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default WeatherContainer;
