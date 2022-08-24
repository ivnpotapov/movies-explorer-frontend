import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrap'>
        <h2 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>

        <div className='footer__content'>
          <ul className='footer_link-wrap'>
            <li className='footer__link-item'>
              <a
                href='https://practicum.yandex.ru/'
                className='footer__link'
                target='_blank'
                rel='noreferrer'>
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__link-item'>
              <a
                href='https://github.com/'
                className='footer__link'
                target='_blank'
                rel='noreferrer'>
                Github
              </a>
            </li>
            <li className='footer__link-item'>
              <a
                href='https://ru-ru.facebook.com/'
                className='footer__link'
                target='_blank'
                rel='noreferrer'>
                Facebook
              </a>
            </li>
          </ul>
          <p className='footer__copy'>© 2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
