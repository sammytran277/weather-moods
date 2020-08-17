import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "./Home.css";
import Header from "../Header/Header";
import SearchContainer from "./SearchContainer/SearchContainer";
import WeatherContainer from "./WeatherContainer/WeatherContainer";
import Footer from "../Footer/Footer";

const API_URL =
  process.env.REACT_APP_ENV === "production"
    ? "http://192.168.99.100:8000"
    : "https://weather-moods-api.herokuapp.com";

const GENRE_ID = {
  "All Genres": 34,
  "Hip-Hop": 1073,
  Pop: 14,
  Techno: 1050,
  "R&B": 15,
  Punk: 1006,
  Country: 6,
  "Indie Rock": 1004,
  Latin: 12,
  Jazz: 11,
  Christian: 22,
};

const Home = () => {
  const [genre, setGenre] = useState("All Genres");
  const [city, setCity] = useState("");
  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [weekWeather, setWeekWeather] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    console.log(genre);
    event.preventDefault();
    setCity(userInput);
    getApiData(genre, userInput);
  };

  const getApiData = async (genre, city) => {
    if (genre !== "" && city !== "") {
      // Make all 3 API calls here, chaining them together
      await getWeatherData(city);
    }
  };

  const extractWeather = ({ daily }) => {
    const weather = [];
    for (let i = 0; i < 7; i++) {
      weather.push(daily[i].weather[0].main);
    }

    return weather;
  };

  const getWeatherData = async (city) => {
    setLoading(true);
    const url = `${API_URL}/api/weather/${city}`;
    const data = await fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });

    console.log(data);
    setWeatherData(data);
    setWeekWeather(extractWeather(data));
  };

  useEffect(() => {
    async function getMusicSuggestions() {
      const music = [...weekWeather]; 
      for (let i = 0; i < weekWeather.length; i++) {
        music[i] = await getMusicSuggestion(weekWeather[i]);
      }
      console.log(music);
      setSuggestions(music);
    }

    getMusicSuggestions();
  }, [weekWeather]);

  const getMusicSuggestion = async (weather) => {
    const url = `${API_URL}/api/music/${weather}/${GENRE_ID[genre]}`;
    const data = await fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });

    console.log(data);
    return getRandomSong(data.message.body.track_list);
  };

  const getRandomSong = (trackList) => {
    console.log(trackList.length);
    let random = Math.floor(Math.random() * trackList.length);
    let randomSong = trackList[random].track.track_name;

    while (suggestions.filter(suggestion => suggestion.songName === randomSong).length !== 0) {
      random = Math.floor(Math.random() * trackList.length);
      randomSong = trackList[random].track.track_name;
    }

    let artist = trackList[random].track.artist_name;

    return {
      "songName": randomSong, 
      "artistName": artist,
    };
  }

  const renderWeatherContainer = () => {
    if (weatherData !== null) {
      return <WeatherContainer city={city} data={weatherData} />;
    } else if (loading) {
      return (
        <div className="loading">
          Getting your weather data...
          <Spinner className="ml-3 loading-spinner" animation="border" />
        </div>
      );
    } else {
      return <div className="loading"></div>;
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
};

export default Home;
