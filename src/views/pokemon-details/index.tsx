import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch, RootState } from "../../redux/interfaces";
import { getPokemon } from "../../redux/slices/pokemonDetailsSlice";
import Evolutions from "./Components/Evolutions";
import GoBackArrow from "./Components/GoBackArrow";
import ImageAndInfo from "./Components/ImageAndInfo";
import NameAndId from "./Components/NameAndId";
import Types from "./Components/Types/Types";
import { IndexStyled } from "./IndexStyles";

const PokemonDetails = () => {

    const { pokemonId = '1' } = useParams();
    const pokemonIdToInt = parseInt(pokemonId)
    const dispatch = useDispatch<AppDispatch>();

    const { pokemon } = useSelector((state: RootState) => state.pokemonDetailsSlice)

    useEffect(() => {
        dispatch(getPokemon(pokemonIdToInt))
    }, [dispatch,pokemonIdToInt])

    return (

        <IndexStyled>

            <GoBackArrow />

            <NameAndId pokemonName={pokemon.name} pokemonId={pokemonId} />

            <ImageAndInfo img={pokemon.img} imgAlt={pokemon.name} />

            <Types types={pokemon.types} />

            <Evolutions pokemonsEvo={pokemon.dataEvo} />

        </IndexStyled>
    )
}


export default PokemonDetails;