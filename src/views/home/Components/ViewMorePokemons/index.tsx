import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/interfaces";
import { getMorePokemons } from "../../../../redux/slices/pokemonsSlice";
import { ViewMorePokemonsStyled } from "./Style";

const ViewMorePokemons = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handleViewMorePokemons = () => {
        dispatch(getMorePokemons());
    }

    return (
        <ViewMorePokemonsStyled onClick={handleViewMorePokemons}>
            View more
        </ViewMorePokemonsStyled>
    )
}

export default ViewMorePokemons;
