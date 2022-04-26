import { useDispatch } from "react-redux";
import { useForm } from "../../../../hooks/useForm";

import { AppDispatch } from "../../../../redux/interfaces";
import { ContainerSearchFormStyled, TitleFormStyled, FormStyled, ButtonSearchStyled } from "./Style";

import { searchPokemons } from "../../../../redux/slices/pokemonsSlice";

const SearchForm = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { values, handleChange } = useForm({ namePokemon: '' });

    const handleFilterPokemons = async (e: any) => {
        e.preventDefault();
        dispatch(searchPokemons(values.namePokemon));
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