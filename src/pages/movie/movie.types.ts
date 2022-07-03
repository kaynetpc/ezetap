export interface IMovie {
    name?: string;
    cast?: string;
    language?: string;
    genre?: string;
    image?: string;
    details?: IMovieDetails []
}

export type IMovieDetails = {
    film_synopsis: string;
    price: string;
    location: string;
    timing: string;
    theatre_name: string;
}

