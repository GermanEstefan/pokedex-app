import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch, RootState } from "../../redux/interfaces";
import { getPokemon } from "../../redux/slices/pokemonDetailsSlice";
import GoBackArrow from "./Components/GoBackArrow";

const PokemonDetails = () => {

    const { pokemonId = '1' } = useParams();
    const pokemonIdToInt = parseInt(pokemonId)
    const dispatch = useDispatch<AppDispatch>();

    const { pokemon } = useSelector((state: RootState) => state.pokemonDetailsSlice)


    useEffect(() => {
        dispatch(getPokemon(pokemonIdToInt))
    }, [])

    return (
        <div>
            <GoBackArrow />
            <div>
                <h1>{pokemon.name}</h1>
                <small>{pokemon.id}</small>
            </div>
            <img src={pokemon.img} alt={pokemon.name} />
            <div>
                <h2>Types</h2>
                <ul>
                    {
                        pokemon?.abilities?.map((ability: any) => (
                            <li>{ability}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h2>Evolutions:</h2>
            </div>
        </div>
    )
}


export default PokemonDetails;