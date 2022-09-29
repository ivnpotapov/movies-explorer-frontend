import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { routes } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import SavedMovies from '../pages/SavedMovies/SavedMovies';
import Profile from '../pages/Profile/Profile';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/Signin/Signin';
import NotFound from '../pages/NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLogined, setIsLogined] = useState(false);
  const [moviesAll, setMoviesAll] = useState([]);
  const [moviesSaved, setMoviesSaved] = useState([]);
  const [isPreloader, setIsPreloader] = useState(true);

  useEffect(() => {
    if (!isLogined) {
      tokenCheck();
    }
  }, [isLogined]);

  const tokenCheck = () => {
    setIsPreloader(true);
    if (localStorage.getItem('token')) {
      const jwt = localStorage.getItem('token');
      mainApi
        .checkUser(jwt)
        .then((res) => {
          mainApi.setHeadersAuthorization = jwt;
          setCurrentUser({ name: res.name, email: res.email, _id: res._id });
          setIsLogined(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsPreloader(false);
        });
    } else {
      setIsPreloader(false);
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLogined,
        setIsLogined,
        tokenCheck,
        moviesAll,
        setMoviesAll,
        moviesSaved,
        setMoviesSaved,
      }}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route
            element={
              <ProtectedRoute isLogined={isLogined} isPreloader={isPreloader} />
            }>
            <Route path={routes.movies} element={<Movies />} />
            <Route path={routes.savedMovies} element={<SavedMovies />} />
            <Route path={routes.profile} element={<Profile />} />
          </Route>

          <Route path={routes.signin} element={<Signin />} />
          <Route path={routes.signup} element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
