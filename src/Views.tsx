import {Route, Routes} from 'react-router-dom';
import {NotFound} from './pages/notfound/NotFound';
import Dashboard from './pages/dashboard/Dashboard';
import MoviesPage from './pages/movie/MoviesPage';
import Login from './pages/login/Login';

type Props = {}

const Views = (props: Props) => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route index element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/dashboard/moviesPage' element={<MoviesPage/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
  );
};

export default Views;
