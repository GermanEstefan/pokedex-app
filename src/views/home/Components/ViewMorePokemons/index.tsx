import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/interfaces";
import { getMorePokemons } from "../../../../redux/slices/pokemonsSlice";

const ViewMorePokemons = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handleViewMorePokemons = () => {
        dispatch(getMorePokemons());
    }

    return (
        <button
            onClick={handleViewMorePokemons}>
            View more
        </button>
    )
}

export default ViewMorePokemons;
