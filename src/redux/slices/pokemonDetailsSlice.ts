import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MapePokemons from "../../helpers/DataMapperPokeApi"
import { fetchPokemon, fetchPokemonEvolution } from "../../services/pokeApi"
import { PokemonDetailsState, PokemonsState } from "../interfaces"

export const getPokemon = createAsyncThunk(
    'pokemonDetails/getPokemon',
    async (pokemonId: number) => {
        const pokemon = await fetchPokemon(pokemonId);
        const evolutions = await fetchPokemonEvolution(pokemonId);
        const dataOfEvolutions = await Promise.all(
            evolutions.map(async (name: any) => {
                const { sprites, name: nameEvo, id } = await fetchPokemon(name);
                return { sprites, nameEvo, id }
            })
        )
        const dataOfEvolutionsToObj = Object.assign({}, dataOfEvolutions)
        const objeteiro = {
            dataEvo: dataOfEvolutionsToObj
        }
        const dataJoined = Object.assign(pokemon, objeteiro)
        return MapePokemons(dataJoined);
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