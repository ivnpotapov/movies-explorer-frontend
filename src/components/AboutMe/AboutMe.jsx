import React from 'react';
import './AboutMe.css';
import aboutImg from '../../images/user-pic.png';

const AboutMe = () => {
  return (
    <section className='about' id='about'>
      <div className='about__wrap'>
        <h2 className='about__title'>Студент</h2>
        <div className='about__content'>
          <img src={aboutImg} alt='фото автора' className='about__img' />
          <div className='about__text-wrap'>
            <p className='about__name'>Виталий</p>
            <p className='about__special'>Фронтенд-разработчик, 30 лет</p>
            <p className='about__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>

            <ul className='about__link-wrap'>
              <li className='about__link-item'>
                <a
                  href='https://ru-ru.facebook.com/'
                  className='about__link'
                  target='_blank'
                  rel='noreferrer'>
                  Facebook
                </a>
              </li>
              <li className='about__link-item'>
                <a
                  href='https://github.com/'
                  className='about__link'
                  target='_blank'
                  rel='noreferrer'>
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
