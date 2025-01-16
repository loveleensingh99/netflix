import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import axiosInstance from '../utils/axiosInstance';
import { addPopularMovies } from '../redux/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector((store: RootState) => store.movies.popularMovies);


    const getPopularMovies = async () => {

        const data = await axiosInstance.get("/popular")
        console.log("asdfasdfasdfasdf",data.data);
        dispatch(addPopularMovies(data.data.results));
    }

    useEffect(() => {
        if (!popularMovies)
            getPopularMovies();
    }, [])
}

export default usePopularMovies