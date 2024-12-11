import { createSlice } from "@reduxjs/toolkit"

const geminiSlice = createSlice({
    name: "gemini",
    initialState: {
        showGeminiSearch: false,
    },
    reducers: {
        toggleGeminiSearch: (state) => {
            state.showGeminiSearch = !state.showGeminiSearch;
        },
    },
});

export default geminiSlice.reducer;
export const {toggleGeminiSearch} = geminiSlice.actions;