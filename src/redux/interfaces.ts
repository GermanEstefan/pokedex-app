import { store } from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface PokemonsState {
    pokemons: any
    amount: {
        start: number
        end: number
    }
    loading: null | 'loading' | 'success' | 'failed'
    pokemonsFiltered: []
}

export interface PokemonDetailsState {
    pokemon: any
    loading: null | 'loading' | 'success' | 'failed'
}

