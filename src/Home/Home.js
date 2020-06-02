import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../Header/Header';
import SearchContainer from './SearchContainer/SearchContainer';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import Footer from '../Footer/Footer';

const Home = () => {
  const [genre, setGenre] = useState("All Genres");
  const [city, setCity] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => getApiData(genre, city));

  let songNames = [];
  let songIdentifiers = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(userInput);
  }

  const getApiData = (genre, city) => {
    if (genre !== "" && city !== "") {
      // Make all 3 API calls here, chaining them together
      getWeatherData(city);
      getMusicData(genre);
      getMusicIdentifiers(songNames);
    }
  }

  const getWeatherData = (city) => {
    // Make API call to endpoint here
    setTimeout(() => console.log("Making Weather API call now..."), 1000);
  }

  const getMusicData = (genre) => {
    // Make API call to endpoint here
    setTimeout(() => console.log("Making MusixMatch API call now..."), 1000);
  }

  const getMusicIdentifiers = (songNames) => {
    // Make API call to endpoint here
    setTimeout(() => console.log("Getting music URIs..."), 1000);
  }

  return (
    <div>
      <Header />
      <SearchContainer 
        setGenre={setGenre} 
        setUserInput={setUserInput}
        handleSubmit={handleSubmit} 
      />
      <WeatherContainer />
      <Footer />
    </div>
  );
}

export default Home;