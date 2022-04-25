import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MapePokemons from "../../helpers/DataMapperPokeApi";
import { fetchPokemons } from "../../services/pokeApi";

interface PokemonsSlice {
    pokemonsData: PokemonsData
    loading: 'loading' | 'success' | 'failed'
}

interface PokemonsData {
    countRange: countRange
    pokemons: Array<Pokemons>
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

const initialState = {
    pokemonsData: {
        countRange: {
            start: 1,
            end: 20
        },
        pokemons: []
    },
    loading: 'loading',
} as PokemonsSlice

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
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
    }

});

export const getPokemons = createAsyncThunk(
    'pokemons/getPokemons',
    async (countRange: countRange) => {
        const pokemons = await fetchPokemons(countRange);
        return MapePokemons(pokemons)
    }
)

export const filterOrGetPokemons = createAsyncThunk(
    'pokemons/filterPokemons',
    async (name: any, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
        const state: any = getState()
        const aver = state.pokemonsReducer.pokemons.filter((poke: any) => poke.name.includes(name))
        if (aver.length === 0) {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.trim().toLocaleLowerCase()}`)
            const respToJson = await resp.json();
            return MapePokemons([respToJson]);
        } else {
            return aver;
        }
    }
)



export const { getMorePokemons, resetState } = pokemonSlice.actions;

export default pokemonSlice.reducer;

