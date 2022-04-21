import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../redux/slices/pokemonSlice";
import { AppDispatch } from "../../redux/store";

const PokemonDetails = () => {

    const { pokemonName = '' } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getPokemon(pokemonName))
    }, [])


    return (
        <div>
            <i className="fas fa-arrow-circle-left"></i>
            <h1>Pokemon</h1>
            <strong>{pokemonName}</strong>
        </div>
    )
}


export default PokemonDetails;