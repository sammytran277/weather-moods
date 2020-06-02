import React from 'react';
import './WeatherContainer.css';
import { CardGroup, Accordion, Card } from 'react-bootstrap';
import WeatherCard from './WeatherCard/WeatherCard';

const WeatherContainer = () => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <h2 className="mt-3 text-center">
            Here's the five day weather forecast for Philadelphia:
          </h2>
          <CardGroup className="weather-container justify-content-center">
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
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
