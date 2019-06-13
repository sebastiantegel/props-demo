import React from 'react';
import './movies.css';
import { IMovie } from '../../App';

export interface IAnimal {
    name: string;
    color: string;
    age: number;
}

interface IMoviesProps {
    movies: IMovie[];
}

interface IMoviesState {
}

class Movies extends React.Component<IMoviesProps, IMoviesState> {
    render() {
        let moviesList: any[] = [];

        this.props.movies.forEach(movie => {
            moviesList.push((<li key={movie.id}>
                {movie.name} - {movie.price} kr
            </li>));
        })

        return (
            <div className='movies-container'>
                <ul>
                    {moviesList}
                </ul>
            </div>
        );
    }
}

export default Movies;