import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';
import { routes } from '../../../utils/constants';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import Logo from '../../Logo/Logo';
import { useFormWithValidation } from '../../../utils/hooks';
import { mainApi } from '../../../utils/MainApi';

const Signin = () => {
  const context = useContext(CurrentUserContext);
  const navigation = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [isLoginError, setIsLoginError] = useState(false);
  const [isSubmitPosible, setIsSubmitPosible] = useState(true);

  useEffect(() => {
    if (context.isLogined) {
      navigation(routes.movies);
    }
  }, [context.isLogined, navigation]);

  const handelLoginSubmit = () => {
    setIsLoginError(false);
    setIsSubmitPosible(false);
    mainApi
      .signIn(values.email, values.password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
      })
      .then((res) => {
        context.tokenCheck();
      })
      .catch((err) => {
        setIsLoginError(true);
      })
      .finally(() => {
        setIsSubmitPosible(true);
      });
  };

  return (
    <main className='signin'>
      <div className='signin__wrap'>
        <Logo />
        <h2 className='signin__title'>Рады видеть!</h2>
        <form className='signin__form' name='signin'>
          <div className='signin__input-item'>
            <label className='signin__input-label'>E-mail</label>
            <input
              defaultValue={values.email}
              onChange={handleChange}
              readOnly={!isSubmitPosible}
              required
              placeholder='Email'
              className={`signin__input ${
                errors.email ? 'signin__input_error' : ''
              }`}
              name='email'
              type='email'
            />
            <span
              className={`signin__error ${
                errors.email ? 'signin__error_active' : ''
              }`}>
              {errors.email}
            </span>
          </div>
          <div className='signin__input-item'>
            <label className='signin__input-label'>Пароль</label>
            <input
              defaultValue={values.password}
              onChange={handleChange}
              readOnly={!isSubmitPosible}
              required
              placeholder='Пароль'
              className={`signin__input ${
                errors.password ? 'signin__input_error' : ''
              }`}
              name='password'
              type='password'
            />
            <span
              className={`signin__error ${
                errors.password ? 'signin__error_active' : ''
              }`}>
              {errors.password}
            </span>
          </div>
        </form>

        <div className='signin__control-wrap'>
          <span
            className={`signin__error ${
              isLoginError ? 'signin__error_active' : ''
            }`}>
            Ошибка входа
          </span>
          <button
            disabled={!isValid || !isSubmitPosible}
            onClick={handelLoginSubmit}
            type='button'
            className={`signin__button ${
              isSubmitPosible && isValid ? 'signin__button_active' : ''
            }`}
            aria-label='Войти'>
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
    </main>
  );
};

export default Signin;
