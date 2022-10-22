import { createSlice } from "@reduxjs/toolkit";
import { MovieSliceState } from "./movieTypes";


const initialState: MovieSliceState = {
    searchResult: {
        Search: [],
        totalResults: 0,
        Response: "False",
    },
    movie: null,
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getMoviesWithName(...args) { }, // action creator
        getMovie(...args) { }, // action creator
        setMovies: (state, action) => {
            state.searchResult = action.payload;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        }
    }
});

export const { setMovies, getMoviesWithName, getMovie, setMovie } = movieSlice.actions;
export default movieSlice.reducer;

// module.exports = movieSlice.reducer;
// module.exports.cakeActions = movieSlice.actions;