import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  const isRequestOk = props.inputsValues.search && props.isSerchFormValid;

  return (
    <section className='search'>
      <div className='search__wrap'>
        <form className='search__form' onSubmit={props.handelSearchSubmit}>
          <input
            pattern='[A-Za-zА-Яа-яЁё\s]*'
            defaultValue={props.inputsValues.search}
            onChange={props.handleSerchReqChange}
            type='text'
            className='search__input'
            placeholder='Фильм'
            name='search'
            required
          />
          <button
            className={`search__button-submit ${
              isRequestOk ? 'search__button-submit_enabled' : ''
            }`}
            disabled={isRequestOk ? false : true}>
            Найти
          </button>
        </form>

        <span
          className={`search__error ${
            !props.isSerchFormValid ? 'search__error_active' : ''
          }`}>
          Нужно ввести ключевое слово
        </span>

        <div className='search__checkbox-wrap'>
          <input
            onChange={props.handelShortChange}
            checked={props.isShortChecked}
            className='search__checkbox'
            type='checkbox'
            id='search-checkbox'
            name='short'
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
