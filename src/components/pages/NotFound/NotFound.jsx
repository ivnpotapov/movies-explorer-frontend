import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigation = useNavigate();
  return (
    <section className='not'>
      <div className='not__wrap'>
        <div className='not__text-wrap'>
          <h2 className='not__title'>404</h2>
          <p className='not__text'>Страница не найдена</p>
        </div>
        <p className='not__buttot' onClick={() => navigation(-1)}>
          Назад
        </p>
      </div>
    </section>
  );
};

export default NotFound;
