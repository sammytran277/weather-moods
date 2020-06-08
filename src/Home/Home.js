import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './Home.css';
import Header from '../Header/Header';
import SearchContainer from './SearchContainer/SearchContainer';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import Footer from '../Footer/Footer';

const Home = () => {
  const [genre, setGenre] = useState("All Genres");
  const [city, setCity] = useState("");
  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(userInput);
    getApiData(genre, userInput);
  }

  const getApiData = (genre, city) => {
    if (genre !== "" && city !== "") {
      // Make all 3 API calls here, chaining them together
      getWeatherData(city);
    }
  }

  const getWeatherData = async (city) => {
    setLoading(true);
    const url = `https://weather-moods-api.herokuapp.com/api/weather/${city}`;
    const data = await fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => {
      console.log(error);
      return;
    });

    console.log(data);
    setWeatherData(data);
  }

  const renderWeatherContainer = () => {
    if (weatherData !== null) {
      return (
        <WeatherContainer city={city} data={weatherData} />
      );
    } else if (loading) {
      return (
        <div className="loading">
          Getting your weather data...
          <Spinner className="ml-3 loading-spinner" animation="border" />
        </div>
      );
    } else {
      return (
        <div className="loading"></div>
      );
    }
  };

  return (
    <div>
      <Header />
      <SearchContainer 
        setGenre={setGenre} 
        setUserInput={setUserInput}
        handleSubmit={handleSubmit} 
      />
      {renderWeatherContainer()}
      <Footer />
    </div>
  );
}

export default Home;