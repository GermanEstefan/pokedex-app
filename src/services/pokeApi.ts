interface Range {
    start: number
    end: number
}

export const fetchPokemons = async ({ start, end }: Range) => {
    const pokemons = [];
    for (let i = start; i <= end; i++) {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const respToJSON = await resp.json();
        pokemons.push(respToJSON);
    }
    return pokemons;
}

export const fetchPokemon = async (pokemonId: number | string) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return await resp.json();
}

export const fetchPokemonEvolution = async (idPokemon: number) => {
    /*
        Id of pokemons doesnt match with id from id of evolution chain,
        to fix this problem i need fetch to pokemon species endpoint with id of pokemon
        and get the endpoint of evolution chain to get data and parse
    */
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}`);
    const { evolution_chain } = await resp.json();
    const resp2 = await fetch(evolution_chain.url)
    const { chain: evos } = await resp2.json();
    const getChain = () => {
        let chain: any = [];

        if (evos) {
            chain.push(evos.species.name)

            if (evos.evolves_to.length) {
                chain.push(evos.evolves_to[0].species.name)

                if (evos.evolves_to[0].evolves_to.length) {
                    chain.push(evos.evolves_to[0].evolves_to[0].species.name)
                }
            }
        }
        return chain;
    }

    return getChain();

}