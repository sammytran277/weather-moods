import React from 'react';
import './WeatherContainer.css';
import { CardGroup, Accordion, Card } from 'react-bootstrap';
import WeatherCard from './WeatherCard/WeatherCard';

const WeatherContainer = (props) => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <h2 className="mt-3 text-center">
            Here's the seven day weather forecast for <span className="city">{props.city}</span>:
          </h2>
          <CardGroup className="weather-container justify-content-center">
            {props.data.daily.slice(0, 7).map(day => <WeatherCard key={day.dt} data={day} />)}
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
