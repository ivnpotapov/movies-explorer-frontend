import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { routes } from '../../utils/constants';
import iconClose from '../../images/icon-close.svg';

const Navigation = (props) => {
  const { isModalOpen, setIsModalOpen, location } = props;

  const handelModalClose = () => {
    setIsModalOpen(false);
  };

  const modalClose = (
    <img
      onClick={handelModalClose}
      src={iconClose}
      alt='закрыть'
      className='nav__modal-close'
    />
  );

  const homeLink = (
    <li className='nav__link-item'>
      <Link
        to={routes.home}
        className={`nav__link ${
          location === routes.home ? 'nav__link_active' : ''
        }`}>
        Главная
      </Link>
    </li>
  );

  return (
    <nav className={`nav ${isModalOpen ? 'nav_opened' : ''}`}>
      {isModalOpen && modalClose}
      <ul className='nav__links-wrap'>
        {isModalOpen && homeLink}
        <li className='nav__link-item'>
          <Link
            to={routes.movies}
            className={`nav__link ${
              location === routes.movies ? 'nav__link_active' : ''
            }`}>
            Фильмы
          </Link>
        </li>
        <li className='nav__link-item'>
          <Link
            to={routes.savedMovies}
            className={`nav__link ${
              location === routes.savedMovies ? 'nav__link_active' : ''
            }`}>
            Сохранённые фильмы
          </Link>
        </li>
        <li className='nav__link-item'>
          <Link
            to={routes.profile}
            className={`nav__link nav__link_type_icon ${
              location === routes.profile ? 'nav__link_active' : ''
            }`}>
            Аккаунт
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
