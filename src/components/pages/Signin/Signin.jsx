import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
import { routes } from '../../../utils/constants';
import Logo from '../../Logo/Logo';

const Signin = () => {
  return (
    <section className='signin'>
      <div className='signin__wrap'>
        <Logo />
        <h2 className='signin__title'>Рады видеть!</h2>
        <form className='signin__form' name='signin'>
          <div className='signin__input-item'>
            <label className='signin__input-label'>E-mail</label>
            <input
              required
              placeholder='Email'
              className='signin__input'
              name='email'
              type='email'
            />
            <span className='signin__error signin__error-email'></span>
          </div>
          <div className='signin__input-item'>
            <label className='signin__input-label'>Пароль</label>
            <input
              required
              placeholder='Пароль'
              className='signin__input signin__input_error'
              name='password'
              type='password'
            />
            <span className='signin__error signin__error-password signin__error_active'>
              Что-то пошло не так...
            </span>
          </div>
        </form>

        <div className='signin__control-wrap'>
          <button type='submit' className='signin__button' aria-label='Войти'>
            Войти
          </button>
          <div className='signin__text-container'>
            <p className='signin__text'>Ещё не зарегистрированы?</p>
            <Link to={routes.signup} className='signin__text-link'>
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
