import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { capitalizeString } from "../../../../helpers/capitalizeString";
import { AppDispatch } from "../../../../redux/interfaces";
import { resetState } from "../../../../redux/slices/pokemonsSlice";
import { PokemonProps } from "../Pokemons/interfaces";
import { PokemonContainerStyled, IdPokemonStyled, TypesPokemonStyled, TypePokemonStyled } from "./Styles";

const Pokemon = (props: PokemonProps) => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleViewPokemon = () => {
        dispatch(resetState());
        navigate(`/${props.id}`)
    }

    return (
        <PokemonContainerStyled onClick={handleViewPokemon}>
            <img src={props.img} alt={props.name} width='130px' height='130px' />
            <IdPokemonStyled>Nº{props.id}</IdPokemonStyled>
            <strong>{capitalizeString(props.name)}</strong>
            <TypesPokemonStyled>
                {
                    props.types.map((type) => (
                        <TypePokemonStyled key={type} type={type}>{capitalizeString(type)}</TypePokemonStyled>
                    ))
                }
            </TypesPokemonStyled>
        </PokemonContainerStyled>
    )
}

export default Pokemon;
