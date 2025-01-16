import { createSlice } from "@reduxjs/toolkit";
import { TMovies } from "../utils/types";



interface SearchState {
    showSearch: boolean;
    moviesResults: TMovies[] | null;
}

const initialState: SearchState = {
    showSearch: false,
    moviesResults: null,
};
  
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        toggleSearchView: (state) => {
            state.showSearch = !state.showSearch;
        },
        addSearchBarResults: (state, action) => {
            const { tmdbResultsMoviesArr } = action.payload;

            state.moviesResults = tmdbResultsMoviesArr;

        }

    }
}
)

export const { toggleSearchView, addSearchBarResults } = searchSlice.actions;
export default searchSlice.reducer;
