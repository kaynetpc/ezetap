import {useState} from 'react';
import {defaultDetails} from './data';
import {IMovie, IMovieDetails} from './movie.types';
import './Movies.css';

const Movies = () => {
  const movies: IMovie[] = [
    {
      name: 'Hello',
      cast: 'Tony Stack',
      language: 'Hindu',
      genre: 'Love',
      details: defaultDetails,
      image:
        'https://m.media-amazon.com/images/M/MV5BMmUxNGVkZDgtMjE4Zi00NGZhLWI5ZjYtYzk5OTlkMjI5ZDQ5XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg',
    },

    {
      name: 'RRR',
      cast: 'Hindu',
      language: 'Action',
      genre: 'Tony Unkown',
      image: 'https://nettv4u.com/uploads/04-09-2019/rrr-movie-review.jpg',
    },
    {
      name: 'Thor2',
      cast: 'Mavel',
      language: 'English',
      genre: 'Action',
      image:
        'https://kbimages1-a.akamaihd.net/56833984-8c99-4e84-94ae-c9dd0ecb7d67/1200/1200/False/thor-movie-storybook.jpg',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [activeMovie, setActiveMovie]: any[] = useState();


  return (
    <div className="flex gap-4">
      {movies.map((movie, index) => {
        return (
          <div
            key={index}
            className="max-w-xs rounded overflow-hidden shadow-lg h-full"
          >
            <img src={movie.image} alt="" className="h-96" />
            <div className="px-6 py-2">
              <div className="font-bold text-purple-500 text-xl ">{movie.name}</div>
              <ul>
                <li>
                  <strong>
                    Cast:
                    {movie.cast}
                  </strong>
                </li>
                <li>
                  <strong>
                    Language:
                    {movie.language}
                  </strong>
                </li>
                <li>
                  <strong>
                    Genre:
                    {movie.genre}
                  </strong>
                </li>
              </ul>
              {/* Modal toggle  */}
              <button
                className="my-2 text-green-700 bg-transparent hover:bg-green-800 hover:text-white border-2
        font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                type="button"
                onClick={() => {
                  setActiveMovie(movie.details);
                  setShowModal(true);
                }}
              >
                Locations
                <span className="px-[4px] text-xs bg-gray-300 rounded-full">
                  3
                </span>
              </button>
            </div>
          </div>
        );
      })}

      {/* Main modal */}
      {showModal ? (
        activeMovie &&
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">
                    Available Shows Location
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-8 w-8 text-3xl block py-0 ml-4 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                {
                  activeMovie.map((x: IMovieDetails, i: number) => (

                    <div key={i} className="p-6 float-left block">
                      <div className="accordion" id="#">
                        <div className="accordion-item bg-white border border-gray-200">
                          <h2 className="accordion-header mb-0" id="headingOne">
                            <button
                              className="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
              "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                                  Location #{i+1}
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#"
                          >
                            <div className="accordion-body py-4 px-5">
                              <div className="flex justify-evenly">
                                <p>
                                      Theatre name:
                                  <span className="text-lg font-bold font-mono ml-2">
                                    {x.theatre_name}
                                  </span>
                                </p>
                                <p>
                                      Timing:
                                  <span className="text-lg font-bold font-mono ml-2">
                                    {x.timing}
                                  </span>
                                </p>
                                <p>
                                      Location:
                                  <span className="text-lg font-bold font-mono ml-2">
                                    {x.location}
                                  </span>
                                </p>
                                <p>
                                      Price:
                                  <span className="text-lg font-bold font-mono ml-2">
                                        ${x.price}
                                  </span>
                                </p>
                              </div>
                              <br />
                              <strong className="mr-2">
                                    Film synopsis:
                              </strong>
                              {x.film_synopsis}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    Movies Locations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Movies;
