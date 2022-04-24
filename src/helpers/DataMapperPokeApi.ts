
const MapePokemons = (data: any) => {
    if (Array.isArray(data)) {
        return data.map((poke: any) => {
            const typesPoke = poke.types.map((type: any) => type.type.name);
            return {
                "name": poke.name,
                "id": poke.id,
                "types": typesPoke,
                "img": poke.sprites.other.dream_world.front_default
            }
        })
    } else {
      
        const typesPoke = data.types.map((type: any) => type.type.name);
        const abilites = data.abilities.map((abilitie: any) => abilitie.ability.name);

        return {
            "name": data.name,
            "id": data.id,
            "types": typesPoke,
            "img": data.sprites.other.dream_world.front_default,
            "abilities": abilites,
            "evolutionChain": data.evolves_to
        }
    }

}


export default MapePokemons;