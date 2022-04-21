import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from './slices/pokemonSlice';

export const store = configureStore({
    reducer: {
        pokemonsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;