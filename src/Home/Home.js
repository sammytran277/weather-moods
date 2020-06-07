import React, { useState } from 'react';
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

  return (
    <div>
      <Header />
      <SearchContainer 
        setGenre={setGenre} 
        setUserInput={setUserInput}
        handleSubmit={handleSubmit} 
      />
      {(weatherData === null) ? <div className="empty"></div> : <WeatherContainer city={city} data={weatherData} />}
      <Footer />
    </div>
  );
}

export default Home;