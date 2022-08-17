import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className='portfolio__wrap'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__link-wrap'>
          <li className='portfolio__link-item'>
            <a
              href='https://github.com/ivnpotapov/how-to-learn'
              className='portfolio__link'
              target='_blank'
              rel='noreferrer'>
              Статичный сайт
            </a>
          </li>
          <li className='portfolio__link-item'>
            <a
              href='https://github.com/ivnpotapov/russian-travel'
              className='portfolio__link'
              target='_blank'
              rel='noreferrer'>
              Адаптивный сайт
            </a>
          </li>
          <li className='portfolio__link-item'>
            <a
              href='https://github.com/ivnpotapov/react-mesto-auth'
              className='portfolio__link'
              target='_blank'
              rel='noreferrer'>
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
