import React, { useState, useEffect, useContext } from 'react';
import './SavedMovies.css';
import { useFormWithValidation } from '../../../utils/hooks';
import { mainApi } from '../../../utils/MainApi';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { searchMovies, filterShortsMovies } from '../../../utils/searchMovies';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import Footer from '../../Footer/Footer';

const SavedMovies = () => {
  const context = useContext(CurrentUserContext);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isMoviesReqError, setIsMoviesReqError] = useState(false);
  const [moviesSavedForRender, setMoviesSavedForRender] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const {
    values: inputsValues,
    handleChange: handleSerchReqChange,
    isValid: isSerchFormValid,
  } = useFormWithValidation();

  useEffect(() => {
    setIsMoviesReqError(false);
    setIsPreloader(true);

    mainApi
      .getSavedMovies()
      .then((resSaved) => {
        resSaved.forEach((el) => {
          el.isSaved = true;
        });
        context.setMoviesSaved(resSaved);
        setMoviesSavedForRender(resSaved);
      })
      .catch((err) => {
        setIsMoviesReqError(true);
      })
      .finally(() => setIsPreloader(false));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setMoviesSavedForRender(context.moviesSaved);
  }, [context.moviesSaved]);

  // handelSearchSubmit
  const handelSearchSubmit = (e) => {
    e.preventDefault();
    let searched = searchMovies(context.moviesSaved, inputsValues.search);

    if (isShortChecked) {
      searched = filterShortsMovies(searched, isShortChecked);
    }
    setMoviesSavedForRender(searched);
    setIsSearched(true);
  };

  // handelShortChange
  const [isShortChecked, setIsShortChecked] = React.useState(false);

  const handelShortChange = () => {
    let filtered;
    if (!isShortChecked) {
      filtered = filterShortsMovies(context.moviesSaved, !isShortChecked);
      setMoviesSavedForRender(filtered);
    } else {
      filtered = context.moviesSaved;
    }

    localStorage.setItem('isShortChecked', JSON.stringify(!isShortChecked));
    localStorage.setItem('filteredMovies', JSON.stringify(filtered));
    setMoviesSavedForRender(filtered);
    setIsShortChecked((prev) => !prev);
  };

  return (
    <>
      <Header />
      <main className='main'>
        <SearchForm
          // search
          handleSerchReqChange={handleSerchReqChange}
          inputsValues={inputsValues}
          handelSearchSubmit={handelSearchSubmit}
          isSerchFormValid={isSerchFormValid}
          // short
          isShortChecked={isShortChecked}
          handelShortChange={handelShortChange}
        />
        <MoviesCardList
          isPreloader={isPreloader}
          moviesForRender={moviesSavedForRender}
          isSearched={isSearched}
          isMoviesReqError={isMoviesReqError}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
