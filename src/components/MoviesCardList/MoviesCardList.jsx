import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import { routes } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = (props) => {
  const url = useLocation().pathname;

  // handelResize
  const resize = useCallback(() => {
    return () => {
      if (url === routes.savedMovies) {
        return { init: 100, add: 3 };
      }

      const size = window.innerWidth;
      let config;
      if (size >= 1280) {
        config = { init: 12, add: 3 };
      } else if (size >= 768) {
        config = { init: 8, add: 2 };
      } else if (size >= 320) {
        config = { init: 5, add: 2 };
      }
      return config;
    };
  }, [url]);

  const [numberOfCard, setNumberOfCard] = React.useState(resize());

  useEffect(() => {
    const handelResize = () => {
      setNumberOfCard(resize());
    };

    window.addEventListener('resize', handelResize);
    return () => {
      window.removeEventListener('resize', handelResize);
    };
  }, [resize]);

  // card list
  let cardsList = '';
  if (props.moviesForRender.length) {
    cardsList = props.moviesForRender
      .filter((el, idx) => idx < numberOfCard.init)
      .map((el, idx) => (
        <MoviesCard key={`${el.movieId}${idx}`} card={el} isSaved={false} />
      ));
  } else if (props.isSearched) {
    cardsList = 'Ничего не найдено';
  }

  // add button
  const handelAddButtonClick = () => {
    setNumberOfCard((prev) => {
      return {
        init: prev.init + prev.add,
        add: prev.add,
      };
    });
  };

  let addButton = '';
  if (props.moviesForRender.length > numberOfCard.init) {
    addButton = (
      <div
        className={`add__wrap ${
          url === routes.savedMovies ? 'add__wrap_hidden' : ''
        }`}>
        <button
          type='button'
          className='add__button'
          onClick={handelAddButtonClick}>
          Ещё
        </button>
      </div>
    );
  }

  return (
    <section className='card-list'>
      {props.isMoviesReqError
        ? '«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»'
        : null}
      {props.isPreloader ? (
        <Preloader />
      ) : (
        <div className='card-list__wrap'>{cardsList}</div>
      )}

      {addButton}
    </section>
  );
};

export default MoviesCardList;
