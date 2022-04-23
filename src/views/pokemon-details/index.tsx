import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../redux/slices/pokemonSlice";
import { AppDispatch } from "../../redux/store";
import GoBackArrow from "./Components/GoBackArrow";

const PokemonDetails = () => {

    const { pokemonName = '' } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getPokemon(pokemonName))
    }, [])


    return (
        <div>
            <GoBackArrow />
            <strong>{pokemonName}</strong>
        </div>
    )
}


export default PokemonDetails;