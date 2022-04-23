import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { PokemonProps } from "../../views/home/Components/Pokemons/interfaces";
import { AppDispatch } from "../store";

export interface PokemonState {
    pokemons: any
    amount: number
    loading: null | 'loading' | 'success' | 'failed'
    pokemonsFiltered: []
    pokemon: any
}


export const getPokemons = createAsyncThunk(
    'pokemon/getPokemons',
    async (amount: number) => {
       
        const pokemons = [];
        for (let i = 1; i <= amount; i++) {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const respToJSON = await resp.json();
            pokemons.push(respToJSON);
        }
        const pokemonsMapped = pokemons.map((poke) => {
            const typesPoke = poke.types.map((type: any) => type.type.name);
            return {
                "name": poke.name,
                "id": poke.id,
                "types": typesPoke,
                "img": poke.sprites.other.dream_world.front_default
            }
        })
        console.log(pokemonsMapped)
        return pokemonsMapped;
    }
)

export const getPokemon = createAsyncThunk(
    'pokemon/getPokemon',
    async (pokemonName: string) => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const respToJSON = await resp.json();
        return respToJSON;
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        amount: 20,
        loading: null,
        pokemonsFiltered: [],
        pokemon: null,
        isFiltred: false
    } as PokemonState,
    reducers: {
        filterPokemons: (state, { payload }) => {
            state.pokemonsFiltered = state.pokemons.filter((poke: PokemonProps) => poke.name.includes(payload))
        },
        addMorePokemons: (state) => {
            state.amount += 20
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getPokemons.pending, (state, action) => {
            state.loading = 'loading'
        })
        builder.addCase(getPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload
            state.loading = 'success'
        })
        builder.addCase(getPokemons.rejected, (state, action) => {
            state.loading = 'failed'
        })

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

});

export const { filterPokemons, addMorePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;

