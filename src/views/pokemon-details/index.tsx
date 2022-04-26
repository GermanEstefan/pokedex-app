import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../redux/slices/pokemonDetailsSlice";
import { AppDispatch, RootState } from "../../redux/store";
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

    const pokemonState = useSelector((state: RootState) => state.pokemonDetailsSlice)


    useEffect(() => {
        dispatch(getPokemon(pokemonIdToInt))
    }, [dispatch, pokemonIdToInt])

    return (

        <IndexStyled>
            {
                pokemonState.loading === 'loading'
                    ? <h1>Loading...</h1>
                    : pokemonState.loading === 'failed'
                    ? <h1>Failed to fetch, check id of pokemon</h1>
                    : <>
                        <GoBackArrow />

                        <NameAndId pokemonName={pokemonState.pokemon.name} pokemonId={pokemonId} />

                        <ImageAndInfo
                            img={pokemonState.pokemon.img}
                            imgAlt={pokemonState.pokemon.name}
                            stats={pokemonState.pokemon.stats}
                            weight={pokemonState.pokemon.weight}
                            abilities={pokemonState.pokemon.abilities}
                        />

                        <Types types={pokemonState.pokemon.types} />

                        <Evolutions pokemonsEvo={pokemonState.pokemon.dataEvo} />
                    </>
            }
        </IndexStyled>
    )
}


export default PokemonDetails;