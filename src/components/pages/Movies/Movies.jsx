import React from 'react';
import './Movies.css';
// import { routes } from '../../../utils/constants';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import Footer from '../../Footer/Footer';

const Movies = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <div className='add__wrap'>
        <button type='button' className='add__button'>
          Ещё
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
