import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import { filterPokemons } from "../../../../redux/slices/pokemonsSlice";
import { AppDispatch, RootState } from "../../../../redux/interfaces";
import { ContainerSearchFormStyled, TitleFormStyled, FormStyled, ButtonSearchStyled } from "./Style";

const SearchForm = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { values, handleChange } = useForm({ namePokemon: '' });
    const state = useSelector((state: RootState) => state.pokemonsReducer.pokemons);

    const handleFilterPokemons = (e: any) => {
        e.preventDefault();
        dispatch(filterPokemons(values.namePokemon));
    }

    return (
        <ContainerSearchFormStyled>
            <TitleFormStyled>Search any pokemon</TitleFormStyled>
            <FormStyled onSubmit={handleFilterPokemons}>
                <input type="text" name='namePokemon' value={values.namePokemon} onChange={handleChange} />
                <ButtonSearchStyled className="fas fa-search"></ButtonSearchStyled>
            </FormStyled>
        </ContainerSearchFormStyled>
    )
};

export default SearchForm;