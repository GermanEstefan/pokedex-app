import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from './slices/pokemonsSlice';
import pokemonDetailsSlice from "./slices/pokemonDetailsSlice";

export const store = configureStore({
    reducer: {
        pokemonsReducer,
        pokemonDetailsSlice
    }
});

