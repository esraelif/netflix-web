import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'



const Row = ({ title, fetchURL, rowID }) => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL]);
    //console.log("fetchURL", fetchURL)
    // console.log(title)
    // console.log("movies", movies)
    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    return (
        < >
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>

                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />

                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-smooth scrollbar-hide relative' >
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />


                    ))}

                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
            </div>
        </>
    );
}

export default Row;
