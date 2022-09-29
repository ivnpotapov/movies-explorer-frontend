import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { routes } from '../../../utils/constants';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import Logo from '../../Logo/Logo';
import { useFormWithValidation } from '../../../utils/hooks';
import { mainApi } from '../../../utils/MainApi';

const Signup = () => {
  const context = useContext(CurrentUserContext);
  const navigation = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [isRegisterError, setIsRegisterError] = useState(false);
  const [isSubmitPosible, setIsSubmitPosible] = useState(true);

  useEffect(() => {
    if (context.isLogined) {
      navigation(routes.movies);
    }
  }, [context.isLogined, navigation]);

  const handelRegisterSubmit = () => {
    setIsRegisterError(false);
    setIsSubmitPosible(false);
    mainApi
      .signUp(values.username, values.email, values.password)
      .then((res) => {
        return mainApi.signIn(values.email, values.password);
      })
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
      })
      .then((res) => {
        context.tokenCheck();
      })
      .catch((err) => {
        setIsRegisterError(true);
      })
      .finally(() => {
        setIsSubmitPosible(true);
      });
  };

  return (
    <main className='signup'>
      <div className='signup__wrap'>
        <Logo />
        <h2 className='signup__title'>Добро пожаловать!</h2>
        <form className='signup__form' name='signup'>
          <div className='signup__input-item'>
            <label className='signup__input-label'>Имя</label>
            <input
              defaultValue={values.username}
              onChange={handleChange}
              pattern='[A-Za-zА-Яа-яЁё\s-]*'
              readOnly={!isSubmitPosible}
              required
              placeholder='Имя'
              className={`signup__input ${
                errors.username ? 'signup__input_error' : ''
              }`}
              name='username'
              type='text'
            />
            <span
              className={`signup__error ${
                errors.username ? 'signup__error_active' : ''
              }`}>
              {errors.username}
            </span>
          </div>
          <div className='signup__input-item'>
            <label className='signup__input-label'>E-mail</label>
            <input
              defaultValue={values.email}
              onChange={handleChange}
              readOnly={!isSubmitPosible}
              required
              placeholder='Email'
              className={`signup__input ${
                errors.email ? 'signup__input_error' : ''
              }`}
              name='email'
              type='email'
            />
            <span
              className={`signup__error ${
                errors.email ? 'signup__error_active' : ''
              }`}>
              {errors.email}
            </span>
          </div>
          <div className='signup__input-item'>
            <label className='signup__input-label'>Пароль</label>
            <input
              defaultValue={values.password}
              onChange={handleChange}
              readOnly={!isSubmitPosible}
              required
              placeholder='Пароль'
              className={`signup__input ${
                errors.password ? 'signup__input_error' : ''
              }`}
              name='password'
              type='password'
            />
            <span
              className={`signup__error ${
                errors.password ? 'signup__error_active' : ''
              }`}>
              {errors.password}
            </span>
          </div>
        </form>

        <div className='signup__control-wrap'>
          <span
            className={`signup__error ${
              isRegisterError ? 'signup__error_active' : ''
            }`}>
            Ошибка регистрации
          </span>
          <button
            onClick={handelRegisterSubmit}
            disabled={!isValid || !isSubmitPosible}
            type='button'
            className={`signup__button ${
              isSubmitPosible && isValid ? 'signup__button_active' : ''
            }`}
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
