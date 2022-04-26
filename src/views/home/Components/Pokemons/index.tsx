import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../../../redux/slices/pokemonsSlice";
import { AppDispatch, RootState } from "../../../../redux/interfaces";
import Pokemon from "../Pokemon";
import { PokemonsContainerStyled } from "./Styles";
import Loading from "../Loading";

const Pokemons = () => {

    const dispatch = useDispatch<AppDispatch>();
    const pokemonsState = useSelector((state: RootState) => state.pokemonsSlice)

    useEffect(() => {
        dispatch(getPokemons(pokemonsState.pokemonsData.countRange))
    }, [dispatch, pokemonsState.pokemonsData.countRange])

    return (
        <PokemonsContainerStyled>
            {
                (pokemonsState.pokemonsData.pokemonsFiltered.length > 0)
                    ? pokemonsState.pokemonsData.pokemonsFiltered.map(poke => (
                        <Pokemon
                            name={poke.name}
                            key={poke.id}
                            id={poke.id}
                            types={poke.types}
                            img={poke.img}
                        />
                    ))
                    : pokemonsState.pokemonsData.pokemons.map(poke => (
                        <Pokemon
                            name={poke.name}
                            key={poke.id}
                            id={poke.id}
                            types={poke.types}
                            img={poke.img}
                        />
                    ))

            }

            {pokemonsState.loading === 'loading' && <Loading/>}

        </PokemonsContainerStyled>
    )

}


export default Pokemons;