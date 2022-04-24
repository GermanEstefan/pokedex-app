import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MapePokemons from "../../helpers/DataMapperPokeApi"
import { fetchPokemon, fetchPokemonEvolution } from "../../services/pokeApi"
import { PokemonDetailsState, PokemonsState } from "../interfaces"

export const getPokemon = createAsyncThunk(
    'pokemonDetails/getPokemon',
    async (pokemonId: number) => {
        const pokemon = await fetchPokemon(pokemonId);
        const pokemonEvolutionChain = await fetchPokemonEvolution(pokemonId);
        const pokemonJoinedWithEvolution = Object.assign(pokemon, pokemonEvolutionChain)
        return MapePokemons(pokemonJoinedWithEvolution);
    } 
)

export const pokemonDetailsSlice = createSlice({
    name: 'pokemonDetails',
    initialState: {
        pokemon: [],
        loading: null,
    } as PokemonDetailsState,
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(getPokemon.pending, (state, action) => {
            state.loading = 'loading'
        })
        builder.addCase(getPokemon.fulfilled, (state, action) => {
            state.pokemon = action.payload
            state.loading = 'success'
        })
        builder.addCase(getPokemon.rejected, (state, action) => {
            state.loading = 'failed'
        })
    }
})

export default pokemonDetailsSlice.reducer;