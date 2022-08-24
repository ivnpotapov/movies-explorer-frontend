import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { routes } from '../../utils/constants';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';

const Header = (props) => {
  const location = useLocation().pathname;
  const isHome = location === '/';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsModalOpen(true);
  };

  let auth;

  if (isHome) {
    auth = (
      <ul className='header__links-wrap header__links_type_auth'>
        <li className='header__link-item'>
          <Link to={routes.signup} className='header__link'>
            Регистрация
          </Link>
        </li>
        <li className='header__link-item'>
          <Link
            to={routes.signin}
            className='header__link header__link_type_button'>
            Войти
          </Link>
        </li>
      </ul>
    );
  } else {
    auth = (
      <div className='header__burger' onClick={handleBurgerClick}>
        <div className='header__burger-item'></div>
        <div className='header__burger-item'></div>
        <div className='header__burger-item'></div>
      </div>
    );
  }

  return (
    <header className={`header ${isHome ? 'header_place_home' : ''}`}>
      <div className='header__wrap'>
        <Logo />
        {!isHome && (
          <Navigation
            location={location}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {auth}
      </div>
      {isHome && <Promo />}
    </header>
  );
};

export default Header;
