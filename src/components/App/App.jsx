import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { routes } from '../../utils/constants';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import SavedMovies from '../pages/SavedMovies/SavedMovies';
import Profile from '../pages/Profile/Profile';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/Signin/Signin';
import NotFound from '../pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.movies} element={<Movies />} />
        <Route path={routes.savedMovies} element={<SavedMovies />} />
        <Route path={routes.profile} element={<Profile />} />
        <Route path={routes.signin} element={<Signin />} />
        <Route path={routes.signup} element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
