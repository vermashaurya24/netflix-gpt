import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import geminiReducer from "./geminiSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        movies: moviesReducer,
        gemini: geminiReducer,
        config: configReducer,
    }
});

export default appStore;