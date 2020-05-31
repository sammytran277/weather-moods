import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import SearchContainer from './SearchContainer/SearchContainer';
import Footer from '../Footer/Footer';
import WeatherContainer from './WeatherContainer/WeatherContainer';

const Home = () => {
  return (
    <div>
      <Header />
      <SearchContainer />
      <WeatherContainer />
      <Footer />
    </div>
  );
}

export default Home;