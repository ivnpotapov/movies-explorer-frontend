import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { routes } from '../../utils/constants';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const MoviesCard = (props) => {
  const context = useContext(CurrentUserContext);
  const { card } = props;
  const url = useLocation().pathname;
  const hours = parseInt(card.duration / 60);
  const minutes = card.duration - hours * 60;
  const time = `${hours ? hours : 0}ч ${minutes}м`;

  let saved = '';
  if (card.isSaved && url === routes.savedMovies) {
    saved = 'movie__icon_type_saved';
  } else if (card.isSaved) {
    saved = 'movie__icon_active';
  }

  const handelSaveClick = () => {
    if (card.isSaved) {
      mainApi
        .unsaveMovie(card._id)
        .then((res) => {
          const checkSaved = context.moviesAll.map((el) => {
            if (el.movieId === card.movieId) {
              el.isSaved = false;
              delete el._id;
            }
            return el;
          });
          context.setMoviesAll(checkSaved);

          return mainApi.getSavedMovies();
        })
        .then((res) => {
          const savedMovies = res.map((el) => {
            el.isSaved = true;
            return el;
          });

          context.setMoviesSaved(savedMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      mainApi
        .saveMovie(card)
        .then((res) => {
          const checkSaved = context.moviesAll.map((el) => {
            if (el.movieId === card.movieId) {
              el.isSaved = true;
              el._id = res._id;
            }
            return el;
          });
          context.setMoviesAll(checkSaved);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <article className='movie'>
      <div className='movie__header'>
        <div className='movie__text-wrap'>
          <h3 className='movie__title'>{card.nameRU}</h3>
          <p className='movie__time'>{time}</p>
        </div>
        <span
          onClick={handelSaveClick}
          className={`movie__icon ${saved}`}></span>
      </div>
      <img src={card.image} alt={card.nameRU} className='movie__img' />
    </article>
  );
};

export default MoviesCard;
