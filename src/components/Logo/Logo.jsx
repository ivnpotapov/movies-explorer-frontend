import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logo.css';
import { routes } from '../../utils/constants';
import logo from '../../images/logo.svg';

const Logo = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(routes.home);
  }

  return <img onClick={handleClick} className='logo' src={logo} alt='лого' />;
};

export default Logo;
