import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='tab'>
      <ul className='tab__wrap'>
        <li className='tab__item'>
          <a href='#project' className='tab__link'>
            О проекте
          </a>
        </li>
        <li className='tab__item'>
          <a href='#techs' className='tab__link'>
            Технологии
          </a>
        </li>
        <li className='tab__item'>
          <a href='#about' className='tab__link'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
