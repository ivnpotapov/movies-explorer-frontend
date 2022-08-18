import React from 'react';
import './Profile.css';
import Header from '../../Header/Header';

const Profile = () => {
  return (
    <>
      <Header />
      <section className='profile'>
        <div className='profile__wrap'>
          <h2 className='profile__title'>Привет, Виталий!</h2>
          <div className='profile__text-wrap'>
            <div className='profile__box'>
              <span className='profile__label'>Имя</span>
              <span className='profile__value'>Виталий</span>
            </div>

            <div className='profile__box'>
              <span className='profile__label'>E-mail</span>
              <span className='profile__value'>pochta@yandex.ru</span>
            </div>
          </div>

          <div className='profile__control-wrap'>
            <p className='profile__edit'>Редактировать</p>
            <p className='profile__exit'>Выйти из аккаунта</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
