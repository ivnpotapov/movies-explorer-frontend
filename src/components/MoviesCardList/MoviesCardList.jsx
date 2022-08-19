import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import { moviesCardList } from '../../utils/constants';
import { routes } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  const url = useLocation().pathname;
  let cardsList;
  let addButton = '';
  if (url === routes.savedMovies) {
    cardsList = moviesCardList
      .filter((el) => el.isSaved)
      .map((el, idx) => <MoviesCard key={`${el.title}${idx}`} card={el} />);
  } else {
    cardsList = moviesCardList.map((el, idx) => (
      <MoviesCard key={`${el.title}${idx}`} card={el} />
    ));

    if (cardsList.length) {
      addButton = (
        <div className='add__wrap'>
          <button type='button' className='add__button'>
            Ещё
          </button>
        </div>
      );
    }
  }

  return (
    <section className='card-list'>
      <div className='card-list__wrap'>{cardsList}</div>
      {addButton}
    </section>
  );
};

export default MoviesCardList;