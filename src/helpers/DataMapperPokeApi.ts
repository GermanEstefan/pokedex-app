
const MapePokemons =  (pokemonsFromApi: any) => {
    if (Array.isArray(pokemonsFromApi)) {
        return pokemonsFromApi.map((poke: any) => {
            const typesPoke = poke.types.map((type: any) => type.type.name);
            return {
                "name": poke.name,
                "id": poke.id,
                "types": typesPoke,
                "img": poke.sprites.other.dream_world.front_default
            }
        })
    } else {

        const typesPoke = pokemonsFromApi.types.map((type: any) => type.type.name);
        const abilites = pokemonsFromApi.abilities.map((abilitie: any) => abilitie.ability.name);
        return {
            "name": pokemonsFromApi.name,
            "id": pokemonsFromApi.id,
            "types": typesPoke,
            "img": pokemonsFromApi.sprites.other.dream_world.front_default,
            "abilities": abilites,
            "dataEvo": pokemonsFromApi.dataEvo,
            "weight": pokemonsFromApi.weight
        }
    }

}


export default MapePokemons;