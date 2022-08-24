import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { routes } from '../../../utils/constants';
import Logo from '../../Logo/Logo';

const Signup = () => {
  return (
    <main className='signup'>
      <div className='signup__wrap'>
        <Logo />
        <h2 className='signup__title'>Добро пожаловать!</h2>
        <form className='signup__form' name='signup'>
          <div className='signup__input-item'>
            <label className='signup__input-label'>Имя</label>
            <input
              required
              placeholder='Имя'
              className='signup__input'
              name='username'
              type='text'
            />
            <span className='signup__error signup__error-username'></span>
          </div>
          <div className='signup__input-item'>
            <label className='signup__input-label'>E-mail</label>
            <input
              required
              placeholder='Email'
              className='signup__input'
              name='email'
              type='email'
            />
            <span className='signup__error signup__error-email'></span>
          </div>
          <div className='signup__input-item'>
            <label className='signup__input-label'>Пароль</label>
            <input
              required
              placeholder='Пароль'
              className='signup__input signup__input_error'
              name='password'
              type='password'
            />
            <span className='signup__error signup__error-password signup__error_active'>
              Что-то пошло не так...
            </span>
          </div>
        </form>

        <div className='signup__control-wrap'>
          <button
            type='submit'
            className='signup__button'
            aria-label='Зарегистрироваться'>
            Зарегистрироваться
          </button>
          <div className='signup__text-container'>
            <p className='signup__text'>Уже зарегистрированы?</p>
            <Link to={routes.signin} className='signup__text-link'>
              Войти
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
