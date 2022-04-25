import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from './slices/pokemonsSlice';
import pokemonDetailsSlice from "./slices/pokemonDetailsSlice";

export const store = configureStore({
    reducer: {
        pokemonsSlice,
        pokemonDetailsSlice
    }
});

