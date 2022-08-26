import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { routes } from '../../../utils/constants';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../../utils/hooks';
import { mainApi } from '../../../utils/MainApi';
import Header from '../../Header/Header';

const Profile = () => {
  const navigation = useNavigate();
  const context = useContext(CurrentUserContext);
  const [isSubmitPosible, setIsSubmitPosible] = useState(true);
  const [isEditError, setIsEditError] = useState(false);
  const [isSucses, setIsSucses] = useState(false);

  const { values, handleChange, errors, isValid, setValues } =
    useFormWithValidation();

  useEffect(() => {
    setValues({
      username: context.currentUser.name,
      email: context.currentUser.email,
    });
  }, [setValues, context.currentUser.name, context.currentUser.email]);

  useEffect(() => {
    setIsSucses(false);
  }, [values.username, values.email]);

  useEffect(() => {
    if (!context.isLogined) {
      navigation(routes.home);
    }
  }, [context.isLogined, navigation]);

  const handelEditSubmit = (e) => {
    e.preventDefault();
    setIsSucses(false);
    setIsEditError(false);
    setIsSubmitPosible(false);
    mainApi
      .setUser(values.username, values.email)
      .then((res) => {
        setIsSucses(true);
        context.tokenCheck();
      })
      .catch((err) => {
        setIsEditError(true);
      })
      .finally(() => {
        setIsSubmitPosible(true);
        setIsSucses(true);
      });
  };

  const handleExit = () => {
    context.setIsLogined(false);
    localStorage.removeItem('token');
    localStorage.removeItem('searchRequest');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('isShortChecked');
  };

  const isInputsChange =
    context.currentUser.name !== values.username ||
    values.email !== context.currentUser.email;

  console.log('isSucses', isSucses);
  return (
    <>
      <Header />
      <main className='profile'>
        <div className='profile__wrap'>
          <h2 className='profile__title'>Привет, {context.currentUser.name}</h2>
          <form className='profile__text-wrap' name='edit'>
            <div className='profile__box'>
              <span className='profile__label'>Имя</span>
              <input
                defaultValue={values.username}
                onChange={handleChange}
                pattern='[A-Za-zА-Яа-яЁё\s-]*'
                className={`profile__input ${
                  errors.username ? 'profile__input_error' : ''
                }`}
                type='text'
                name='username'
              />
            </div>
            <span
              className={`profile__error ${
                errors.username ? 'profile__error_active' : ''
              }`}>
              {errors.username}
            </span>

            <div className='profile__box'>
              <span className='profile__label'>E-mail</span>
              <input
                defaultValue={values.email}
                onChange={handleChange}
                className={`profile__input ${
                  errors.email ? 'profile__input_error' : ''
                }`}
                type='email'
                name='email'
              />
            </div>
            <span
              className={`profile__error ${
                errors.email ? 'profile__error_active' : ''
              }`}>
              {errors.email}
            </span>
          </form>

          <div className='profile__control-wrap'>
            <span
              className={`profile__error ${
                isSucses || isEditError ? 'profile__error_active' : ''
              }`}>
              {isSucses ? 'Успешно отредактировано' : 'Ошибка редактирования'}
            </span>
            <button
              onClick={handelEditSubmit}
              disabled={!isValid || !isSubmitPosible || !isInputsChange}
              type='button'
              className={`profile__edit ${
                isInputsChange && isSubmitPosible && isValid
                  ? 'profile__edit_active'
                  : ''
              }`}
              aria-label='Редактировать'>
              Редактировать
            </button>
            <button
              onClick={handleExit}
              type='button'
              className='profile__exit'
              aria-label='Выйти из аккаунта'>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
