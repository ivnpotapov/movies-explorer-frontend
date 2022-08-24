import React, { useEffect, useContext, useState } from 'react';
import './Movies.css';
// import { routes } from '../../../utils/constants';
import { useFormWithValidation } from '../../../utils/hooks';
import { moviesApi } from '../../../utils/MoviesApi';
import { mainApi } from '../../../utils/MainApi';
import { searchMovies, filterShortsMovies } from '../../../utils/searchMovies';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import Footer from '../../Footer/Footer';

const Movies = () => {
  const context = useContext(CurrentUserContext);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isMoviesReqError, setIsMoviesReqError] = useState(false);
  const [serchedMovies, setSerchedMovies] = useState([]);
  const [moviesForRender, setMoviesForRender] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const {
    values: inputsValues,
    handleChange: handleSerchReqChange,
    isValid: isSerchFormValid,
    setValues: setSearchInputValues,
  } = useFormWithValidation();

  const setLocalSearchedData = (
    searchRequest,
    isShortChecked,
    filteredMovies,
  ) => {
    localStorage.setItem('searchRequest', JSON.stringify(searchRequest));
    localStorage.setItem('isShortChecked', JSON.stringify(isShortChecked));
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  };

  // handelSearchSubmit
  const handelSearchSubmit = (e) => {
    e.preventDefault();
    setIsMoviesReqError(false);
    setIsPreloader(true);
    Promise.all([moviesApi.getMovie(), mainApi.getSavedMovies()])
      .then(([resAllMovies, resSaved]) => {
        const checkSaved = resAllMovies.map((el) => {
          el.movieId = el.id;
          el.thumbnail = `https://api.nomoreparties.co/${el.image.formats.thumbnail.url}`;
          el.image = `https://api.nomoreparties.co/${el.image.url}`;

          resSaved.forEach((item) => {
            if (item.movieId === el.id) {
              el._id = item._id;
              el.isSaved = true;
            }
          });

          return el;
        });
        context.setMoviesAll(checkSaved);
        let searched = searchMovies(resAllMovies, inputsValues.search);
        setSerchedMovies(searched);
        if (isShortChecked) {
          searched = filterShortsMovies(serchedMovies, isShortChecked);
        }
        setLocalSearchedData(inputsValues.search, isShortChecked, searched);
        setMoviesForRender(searched);
        setIsSearched(true);
      })
      .catch((err) => {
        setIsMoviesReqError(true);
      })
      .finally(() => setIsPreloader(false));
  };

  // handelShortChange
  const [isShortChecked, setIsShortChecked] = React.useState(false);

  const handelShortChange = () => {
    let filtered;
    if (!isShortChecked) {
      filtered = filterShortsMovies(serchedMovies, !isShortChecked);
      setMoviesForRender(filtered);
    } else {
      filtered = serchedMovies;
    }

    localStorage.setItem('isShortChecked', JSON.stringify(!isShortChecked));
    localStorage.setItem('filteredMovies', JSON.stringify(filtered));
    setMoviesForRender(filtered);
    setIsShortChecked((prev) => !prev);
  };

  // handel get data from localStorage
  useEffect(() => {
    if (localStorage.getItem('searchRequest')) {
      setSearchInputValues({
        search: JSON.parse(localStorage.getItem('searchRequest')),
      });
    }
    if (localStorage.getItem('isShortChecked')) {
      setIsShortChecked(JSON.parse(localStorage.getItem('isShortChecked')));
    }
    if (localStorage.getItem('filteredMovies')) {
      setMoviesForRender(JSON.parse(localStorage.getItem('filteredMovies')));
      setSerchedMovies(JSON.parse(localStorage.getItem('filteredMovies')));
    }
    // eslint-disable-next-line
  }, [setSearchInputValues]);

  // return
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
          moviesForRender={moviesForRender}
          isSearched={isSearched}
          isMoviesReqError={isMoviesReqError}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
