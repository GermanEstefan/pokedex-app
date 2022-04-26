import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MapePokemons from "../../helpers/DataMapperPokeApi"
import { fetchPokemon, fetchPokemonEvolution } from "../../services/pokeApi"

interface PokemonDetailsSlice {
    pokemon: PokemonDetails
    loading: null | 'loading' | 'success' | 'failed'
}

interface PokemonDetails {
    name: string
    id: number
    types: Array<string>
    img: string
    abilities: Array<string>
    dataEvo: Array<DataEvo>
    weight: number | string
}

export interface DataEvo {
    img: string
    nameEvo: string
    id: number
}

export const pokemonDetailsSlice = createSlice({
    name: 'pokemonDetails',
    initialState: {
        pokemon: {},
        loading: null,
    } as PokemonDetailsSlice,
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(getPokemon.pending, (state, action) => {
            state.loading = 'loading'
        })
        builder.addCase(getPokemon.fulfilled, (state, action) => {
            state.pokemon = action.payload as PokemonDetails
            state.loading = 'success'
        })
        builder.addCase(getPokemon.rejected, (state, action) => {
            state.loading = 'failed'
        })
    }
})

export const getPokemon = createAsyncThunk(
    'pokemonDetails/getPokemon',
    async (pokemonId: number) => {
        const pokemon = await fetchPokemon(pokemonId);
        const evolutions = await fetchPokemonEvolution(pokemonId);
        const dataOfEvolutions = await Promise.all(
            evolutions.map(async (name: any) => {
                const { sprites, name: nameEvo, id } = await fetchPokemon(name);
                return { img: sprites.other.dream_world.front_default, nameEvo, id }
            })
        )
        const objeteiro = {
            dataEvo: dataOfEvolutions
        }
        const dataJoined = Object.assign(pokemon, objeteiro)
        return MapePokemons(dataJoined);
    }
)



export default pokemonDetailsSlice.reducer;