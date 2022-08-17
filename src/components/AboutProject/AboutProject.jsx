import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='project' id='project'>
      <div className='project__wrap'>
        <h2 className='project__title'>О проекте</h2>
        <div className='project__text-wrap'>
          <div className='project__text-block'>
            <h3 className='project__subtitle'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='project__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className='project__text-block'>
            <h3 className='project__subtitle'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='project__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='project__time-wrap'>
          <div className='project__time-block'>
            <p className='project__time-strip'>1 неделя</p>
            <p className='project__time-strip'>4 недели</p>
          </div>
          <div className='project__time-block'>
            <p className='project__time-text'>Back-end</p>
            <p className='project__time-text'>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
