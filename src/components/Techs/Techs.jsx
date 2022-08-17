import React from 'react';
import './Techs.css';

const Techs = () => {
  return (
    <section className='tech' id='techs'>
      <div className='tech__wrap'>
        <h2 className='tech__title'>Технологии</h2>
        <h3 className='tech__subtitle'>7 технологий</h3>
        <p className='tech__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='tech__skill-wrap'>
          <li className='tech__skill-item'>HTML</li>
          <li className='tech__skill-item'>CSS</li>
          <li className='tech__skill-item'>JS</li>
          <li className='tech__skill-item'>React</li>
          <li className='tech__skill-item'>Git</li>
          <li className='tech__skill-item'>Express.js</li>
          <li className='tech__skill-item'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
