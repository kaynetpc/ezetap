import {Route, Routes} from 'react-router-dom';
import {NotFound} from './pages/notfound/NotFound';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MoviesPage from './pages/MoviesPage';

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
