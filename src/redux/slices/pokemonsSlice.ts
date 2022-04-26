import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MapePokemons from "../../helpers/DataMapperPokeApi";
import { fetchPokemon, fetchPokemons } from "../../services/pokeApi";
import { RootState } from "../interfaces";

interface PokemonsSlice {
    pokemonsData: PokemonsData
    loading: 'loading' | 'success' | 'failed'
}

interface PokemonsData {
    countRange: countRange
    pokemons: Array<Pokemons>
    pokemonsFiltered: Array<Pokemons> 
}

interface countRange {
    start: number
    end: number
}

interface Pokemons {
    name: string
    id: number
    types: Array<string>
    img: string
}

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        pokemonsData: {
            countRange: {
                start: 1,
                end: 20
            },
            pokemons: [],
            pokemonsFiltered:[]
        },
        loading: 'loading',
    } as PokemonsSlice,
    reducers: {
        getMorePokemons: (state) => {
            state.pokemonsData.countRange.start += 20;
            state.pokemonsData.countRange.end += 20
        },
        resetState: (state) => {
            state.loading = 'loading'
            state.pokemonsData.countRange.start = 1
            state.pokemonsData.countRange.end = 20
            state.pokemonsData.pokemons = []
        }
    },
    extraReducers: (builder) => {
        
        builder.addCase(getPokemons.pending, (state) => {
            state.loading = 'loading'
        })
        builder.addCase(getPokemons.fulfilled, (state, action) => {
            state.pokemonsData.pokemons = state.pokemonsData.pokemons.concat(action.payload)
            state.loading = 'success'
        })

        builder.addCase(searchPokemons.fulfilled, (state, action) => {
            state.pokemonsData.pokemonsFiltered = action.payload as Array<Pokemons>
        })
        builder.addCase(searchPokemons.rejected, (state, action) => {
            
        })
    }

});

export const getPokemons = createAsyncThunk(
    'pokemons/getPokemons',
    async (countRange: countRange) => {
        const pokemons = await fetchPokemons(countRange);
        return MapePokemons(pokemons)
    }
)

export const searchPokemons = createAsyncThunk(
    'pokemons/searchPokemons',
    async (nameOfPokemon: string, { getState }) => {
        if(nameOfPokemon.length === 0) return []
        const nameOfPokemonClean = nameOfPokemon.trim().toLocaleLowerCase();
        const {pokemonsSlice} = getState() as RootState;
        const pokemonsFilterByName = pokemonsSlice.pokemonsData.pokemons.filter((poke: any) => poke.name.includes(nameOfPokemonClean))
        if (pokemonsFilterByName.length === 0) {
            const pokemonFromApi = await fetchPokemon(nameOfPokemonClean);
            return MapePokemons([pokemonFromApi]);
        } else {
            return pokemonsFilterByName;
        }
    }
)

export const { getMorePokemons, resetState } = pokemonSlice.actions;

export default pokemonSlice.reducer;

