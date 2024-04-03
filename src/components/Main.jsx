import React, { useEffect, useState } from 'react';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [randomMovie, setRandomMovie] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzU1M2ExMTkyNDk2NzEzNGJmMWQ1ZjU5NzhiNjQ2YSIsInN1YiI6IjY2MDU5NjI4ZDQwMGYzMDE3ZDkwNzY2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w-areLX0vQ7kJTwhKp607DEZlNublUvJCG43zU5Xl5A'
            }
        };

        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (movies.length > 0) {
            const randomIndex = Math.floor(Math.random() * movies.length);
            setRandomMovie(movies[randomIndex]);
        }
    }, [movies]);

    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <div className='w-full h-[550px] text-white'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='w-full h-full'>
                    <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                    {randomMovie && (
                        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}/images`} alt={randomMovie.title} />
                    )}
                    <div className='absolute w-full top-[20%] p-4 md:p-8'>
                        {randomMovie && (
                            <>
                                <h1 className='text-3xl md:text-5xl font-bold'>{randomMovie.title}</h1>
                                <div className='my-4'>
                                    <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                                    <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                                </div>
                                <p className='text-gray-400 text-sm'>Released: {randomMovie.release_date}</p>
                                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(randomMovie.overview, 150)}</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;
