import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
  console.log("Your base url is: " + process.env.PUBLIC_URL);
  return (
    <div>
      <Header />
      <h1>HOME</h1>
      <Footer />
    </div>
  );
}

export default Home;