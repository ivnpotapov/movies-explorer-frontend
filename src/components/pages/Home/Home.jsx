import React from 'react';
import './Home.css';
import Header from '../../Header/Header';
import NavTab from '../../NavTab/NavTab';
import AboutProject from '../../AboutProject/AboutProject';
import Techs from '../../Techs/Techs';
import AboutMe from '../../AboutMe/AboutMe';
import Portfolio from '../../Portfolio/Portfolio';
import Footer from '../../Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Home;
