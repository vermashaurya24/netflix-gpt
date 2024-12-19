import { createSlice } from "@reduxjs/toolkit"

const geminiSlice = createSlice({
    name: "gemini",
    initialState: {
        showGeminiSearch: false,
        geminiSearchMovieResults: []
    },
    reducers: {
        toggleGeminiSearch: (state) => {
            state.showGeminiSearch = !state.showGeminiSearch;
        },
        addGeminiSearchMovieResults: (state, action) => {
            state.geminiSearchMovieResults.push(action.payload);
        }
    },
});

export default geminiSlice.reducer;
export const {toggleGeminiSearch, addGeminiSearchMovieResults} = geminiSlice.actions;