import { createSlice } from "@reduxjs/toolkit";
import { TMovies } from './../utils/types';


interface MoviesState {
    nowPlayingMovies: TMovies[] | null;
    trailerVideo: string | null;
    popularMovies: TMovies[] | null;
    topRatedMovies: TMovies[] | null;
    upcomingMovies: TMovies[] | null;
}

const initialState: MoviesState = {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
};

const movieSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions

export default movieSlice.reducer;