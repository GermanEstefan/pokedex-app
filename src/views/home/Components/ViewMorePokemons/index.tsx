import { useDispatch, useSelector } from "react-redux";
import { addMorePokemons } from "../../../../redux/slices/pokemonSlice";
import { AppDispatch, RootState } from "../../../../redux/store";

const ViewMorePokemons = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handleViewMorePokemons = () => {
        dispatch(addMorePokemons());
    }

    return (
        <button
            onClick={handleViewMorePokemons}>
            View more
        </button>
    )
}

export default ViewMorePokemons;
