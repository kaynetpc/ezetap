// eslint-disable-next-line
// import Dashboard from './Dashboard';
import './AccountSideBar.css';
import {Link} from 'react-router-dom';
const AccountSideBar = () => {
  return (
    <div className="md:col-span-1 border-r border-neutral-200 pb-8 ">
      <ul className="sideBarNav flex-row py-4 mt-2">
        <Link
          to="/dashboard"
          className="text-sm font-semibold text-neutral-500"
        >
          <li className="pr-full w-full border-b py-2 active">Dashboard</li>
        </Link>
        <Link
          to="/dashboard/moviesPage"
          className="text-sm font-semibold text-neutral-500"
        >
          <li className="pr-full w-full py-2 active">Movies</li>
        </Link>
      </ul>
    </div>
  );
};

export default AccountSideBar;
