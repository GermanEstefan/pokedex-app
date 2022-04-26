
const MapePokemons =  (pokemonsFromApi: any) => {
    if (Array.isArray(pokemonsFromApi)) {
        //This map logic is for pokemons
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
        //This map logic is for pokemon detail especific 
        const typesPoke = pokemonsFromApi.types.map((type: any) => type.type.name);
        const abilites = pokemonsFromApi.abilities.map((abilitie: any) => abilitie.ability.name);
        const stats = pokemonsFromApi.stats.map((stat:any) => {
            return {
                'statName':stat.stat.name,
                'points': stat.base_stat
            }
        })
        return {
            "name": pokemonsFromApi.name,
            "id": pokemonsFromApi.id,
            "types": typesPoke,
            "img": pokemonsFromApi.sprites.other.dream_world.front_default,
            "abilities": abilites,
            "dataEvo": pokemonsFromApi.dataEvo,
            "weight": pokemonsFromApi.weight,
            "stats":stats
        }
    }

}


export default MapePokemons;