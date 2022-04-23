export const fetchPokemons = async (start: number, end: number) => {
    const pokemons = [];
    for (let i = start; i <= end; i++) {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const respToJSON = await resp.json();
        pokemons.push(respToJSON);
    }
    return pokemons;
}

export const fetchPokemon = async (pokemonId: number) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return await resp.json();
}

export const fetchPokemonEvolution = async (idPokemon: number) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${idPokemon}`);
    return await resp.json();
}