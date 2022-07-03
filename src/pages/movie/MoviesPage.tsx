import React from 'react';
import Movies from './Movies';
import AccountSideBar from '../../components/sidbar/AccountSideBar';

function MoviesPage() {
  return (
    <div>
      <div className="contaoner-fluid bg-gray-300 py-4 h-96">
        <div className=" py-4 w-3/4 md:mx-96">
          <h4 className="text-2xl font-bold"> MY MOVIES</h4>
          <h3 className="text-medium font-light text-neutral-500"> PROFILE</h3>
        </div>
        <div className="bg-white container-fluid grid pb-12 md:pl-40">
          <div className="grid md:grid-cols-5 sm:grid-cols-12 w-3/4 m-auto py-4">
            {/* Account SideBar */}
            <AccountSideBar />
            {/* Account Contents */}
            <div className="md:col-span-4 sm:col-span-12 md:px-4">
              <div className="py-4 px-4">
                <h2 className="text-3xl text-neutral-500 md:pr-20 uppercase font-mono">
                  All movies
                </h2>
              </div>
              {/* Movies */}
              <Movies />
              {/* End Movies */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesPage;
