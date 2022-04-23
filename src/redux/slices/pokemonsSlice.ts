import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MapePokemons from "../../helpers/DataMapperPokeApi";
import { fetchPokemons } from "../../services/pokeApi";
import { PokemonProps } from "../../views/home/Components/Pokemons/interfaces";
import { PokemonsState } from "../interfaces";

export const getPokemons = createAsyncThunk(
    'pokemon/getPokemons',
    async (interval: any) => {
        const pokemons = await fetchPokemons(interval.start, interval.end);
        return MapePokemons(pokemons)
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        pokemonsFiltered: [],
        amount: {
            start: 1,
            end: 20
        },
        loading: null,
    } as PokemonsState,
    reducers: {
        filterPokemons: (state, { payload }) => {
            state.pokemonsFiltered = state.pokemons.filter((poke: PokemonProps) => poke.name.includes(payload))
        },
        getMorePokemons: (state) => {
            state.amount.start += 20
            state.amount.end += 20
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getPokemons.pending, (state, action) => {
            state.loading = 'loading'
        })
        builder.addCase(getPokemons.fulfilled, (state, action) => {
            state.pokemons = state.pokemons.concat(action.payload)
            state.loading = 'success'
        })
        builder.addCase(getPokemons.rejected, (state, action) => {
            state.loading = 'failed'
        })
    }

});

export const { filterPokemons, getMorePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;

