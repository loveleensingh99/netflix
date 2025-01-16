import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../redux/movieSlice';
import axiosInstance from '../utils/axiosInstance';
import { RootState } from '../redux/store';
import { TTrailer } from '../utils/types';

export default function useMovieTrailer({movieId}: { movieId: string }) {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store: RootState) => store.movies.trailerVideo);


    const fetchMovie = async () => {

        const fetchData = await axiosInstance.get<{ results: TTrailer[] }>(`/${movieId}/videos?language=en-US`)

        const filterData = fetchData.data.results.filter((item: any) => (
            item.type === "Trailer"
        ))

        const trailer = filterData.length > 0 ? filterData[0] : null;
        console.log("🚀 ~ fetchMovie ~ trailer:", trailer)

        if(trailer.key){

            dispatch(addTrailerVideo(trailer.key))
        }
    }

    useEffect(() => {
        if (!trailerVideo)
            fetchMovie()
    }, [])

}
