import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className='search'>
      <div className='search__wrap'>
        <form className='search__form'>
          <input
            type='text'
            className='search__input'
            placeholder='Фильм'
            required
          />
          <button className='search__button-submit'>Найти</button>
        </form>
        <div className='search__checkbox-wrap'>
          <input
            className='search__checkbox'
            type='checkbox'
            id='search-checkbox'
            name='search-checkbox'
          />
          <label
            htmlFor='search-checkbox'
            className='search__checkbox-label'></label>
          <p className='search__label'>Короткометражки</p>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
