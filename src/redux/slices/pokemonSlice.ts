import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface PokemonState {
    pokemons: any
    loading: null | 'loading' | 'success' | 'failed'
    pokemon: any
}

export const getPokemons = createAsyncThunk(
    'pokemon/getPokemons',
    async () => {
        const pokemons = [];
        for (let i = 1; i <= 30; i++) {
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
        loading: null,
        pokemon: null
    } as PokemonState,
    reducers: {
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

export default pokemonSlice.reducer;
