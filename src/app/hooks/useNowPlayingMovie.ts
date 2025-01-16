import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import axiosInstance from '../utils/axiosInstance';
import { addNowPlayingMovies } from '../redux/movieSlice';

export const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store: RootState) => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {

        const data = await axiosInstance.get("/now_playing?page=1")
        console.log("nowpaly", data.data);
        dispatch(addNowPlayingMovies(data.data.results));
    }

    useEffect(() => {
        if (!nowPlayingMovies) {
            getNowPlayingMovies()
        }
    }, [])

}
