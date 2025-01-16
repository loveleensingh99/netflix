

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axiosInstance from '../utils/axiosInstance';
import { addTopRatedMovies } from '../redux/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {

        const data = await axiosInstance.get("/top_rated",)
        dispatch(addTopRatedMovies(data.data.results));
    }

    useEffect(() => {
        getTopRatedMovies()
    }, [])
}

export default useTopRatedMovies
