

import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axiosInstance from '../utils/axiosInstance';
import { addUpcomingMovies } from '../redux/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {

        const data = await axiosInstance.get("/upcoming")
        dispatch(addUpcomingMovies(data.data.results));
    }

    useEffect(() => {
        getUpcomingMovies()
    }, [])
}

export default useUpcomingMovies




