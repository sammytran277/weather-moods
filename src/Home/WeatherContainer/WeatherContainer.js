import React, { useState } from "react";
import "./WeatherContainer.css";
import { CardGroup, Accordion, Card } from "react-bootstrap";
import WeatherCard from "./WeatherCard/WeatherCard";
import MusicSuggestion from "./MusicSuggestion/MusicSuggestion";

const WeatherContainer = (props) => {
  const [active, setActive] = useState(props.songs[0]);
  const [unit, setUnit] = useState("F");

  const handleAccordion = (index) => {
    console.log("Switching to " + index);
    console.log(props.songs[index]);
    setActive(props.songs[index]);
  };

  const createWeatherCards = () => {
    console.log("Songs: " + props.songs);
    console.log("The active song:" + active);
    return props.data.daily.slice(0, 7).map((day, idx) => {
      return (
        <WeatherCard
          key={day.dt}
          data={day}
          unit={unit}
          onclick={() => handleAccordion(idx)}
        />
      );
    });
  };

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <h2 className="mt-3 text-center">
            Seven day weather forecast for
            <span className="city">{" " + props.city + ", "}</span> in
            <span
              className={unit === "F" ? "" : "inactive"}
              style={{ cursor: "pointer" }}
              onClick={() => setUnit("F")}
            >
              {" "}
              &deg;F{" "}
            </span>{" "}
            |
            <span
              className={unit === "C" ? " " : "inactive"}
              style={{ cursor: "pointer" }}
              onClick={() => setUnit("C")}
            >
              {" "}
              &deg;C
            </span>
            :
          </h2>
          <CardGroup className="weather-container">
            {createWeatherCards()}
          </CardGroup>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <MusicSuggestion song={active} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default WeatherContainer;
