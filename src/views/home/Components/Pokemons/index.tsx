import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../../../redux/slices/pokemonSlice";
import { AppDispatch, RootState } from "../../../../redux/store";
import Pokemon from "../Pokemon";
import { PokemonProps } from "./interfaces";
import { PokemonsContainerStyled } from "./Styles";

const Pokemons = () => {

    const dispatch = useDispatch<AppDispatch>();
    const state = useSelector((state: RootState) => state.pokemonsReducer)

    useEffect(() => {
        dispatch(getPokemons(state.amount))
    }, [state.amount])

    console.log(state.pokemons)

    return (
        <PokemonsContainerStyled>
            {
                state.loading === 'loading'
                    ? <span>Fetching data...</span>
                    : state.loading === 'failed'
                    ? <span>Failed to fetch</span>
                    : state.pokemonsFiltered.length != 0
                    ? state.pokemonsFiltered.map((poke: PokemonProps, i: number) => (
                        <Pokemon
                            name={poke.name}
                            key={i}
                            id={poke.id}
                            types={poke.types}
                            img={poke.img}
                        />
                    ))
                    : state.pokemons.map((poke: PokemonProps, i: number) => (
                        <Pokemon
                            name={poke.name}
                            key={i}
                            id={poke.id}
                            types={poke.types}
                            img={poke.img}
                        />
                    ))
            }
        </PokemonsContainerStyled>
    )

}


export default Pokemons;