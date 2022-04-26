import { useDispatch } from "react-redux";
import { getMorePokemons } from "../../../../redux/slices/pokemonsSlice";
import { AppDispatch } from "../../../../redux/store";
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
