import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { routes } from '../../utils/constants';

const MoviesCard = (props) => {
  const { title, time, img, isSaved } = props.card;
  const url = useLocation().pathname;

  let saved = '';
  if (isSaved && url === routes.savedMovies) {
    saved = 'movie__icon_type_saved';
  } else if (isSaved) {
    saved = 'movie__icon_active';
  }

  return (
    <article className='movie'>
      <div className='movie__header'>
        <div className='movie__text-wrap'>
          <h3 className='movie__title'>{title}</h3>
          <p className='movie__time'>{time}</p>
        </div>
        <span className={`movie__icon ${saved}`}></span>
      </div>
      <img src={img} alt={title} className='movie__img' />
    </article>
  );
};

export default MoviesCard;
