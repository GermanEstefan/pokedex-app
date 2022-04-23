import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch } from "../../redux/interfaces";
import { getPokemon } from "../../redux/slices/pokemonDetailsSlice";
import GoBackArrow from "./Components/GoBackArrow";

const PokemonDetails = () => {

    const { pokemonId = '1' } = useParams();
    const pokemonIdToInt = parseInt(pokemonId)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getPokemon(pokemonIdToInt))
    }, [])

    return (
        <div>
            <GoBackArrow />
            <strong>xd</strong>
        </div>
    )
}


export default PokemonDetails;