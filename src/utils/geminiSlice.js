import { createSlice } from "@reduxjs/toolkit"

const geminiSlice = createSlice({
    name: "gemini",
    initialState: {
        showGeminiSearch: false,
        geminiSearchMovieResults: [],
        geminiSearchMovieNames: []
    },
    reducers: {
        toggleGeminiSearch: (state) => {
            state.showGeminiSearch = !state.showGeminiSearch;
        },
        addGeminiSearchMovieResults: (state, action) => {
            const {moviesData, movies} = action.payload;
            state.geminiSearchMovieNames = movies;
            state.geminiSearchMovieResults = moviesData;
        }
    },
});

export default geminiSlice.reducer;
export const {toggleGeminiSearch, addGeminiSearchMovieResults} = geminiSlice.actions;