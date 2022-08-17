import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { routes } from '../../utils/constants';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import SavedMovies from '../pages/SavedMovies/SavedMovies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.movies} element={<Movies />} />
        <Route path={routes.savedMovies} element={<SavedMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
