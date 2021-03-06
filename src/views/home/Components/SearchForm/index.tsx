import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import { ContainerSearchFormStyled,InputStyled, TitleFormStyled, FormStyled, ButtonSearchStyled } from "./Style";
import { searchPokemons } from "../../../../redux/slices/pokemonsSlice";
import { AppDispatch, RootState } from "../../../../redux/store";


const SearchForm = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { values, handleChange } = useForm({ namePokemon: '' });
    const {pokemonsSlice} = useSelector((state: RootState) => state);

    const handleFilterPokemons = async (e: any) => {
        e.preventDefault();
        dispatch(searchPokemons(values.namePokemon));
    }

    return (
        <ContainerSearchFormStyled>
            <TitleFormStyled>Search any pokemon</TitleFormStyled>
            <small style={{color:"grey", marginBottom:'10px'}}>This input filter the pokemons on your view or search one pokemon by name</small>
            <FormStyled onSubmit={handleFilterPokemons} autoComplete='off' style={{marginBottom:'10px'}}>
                <InputStyled type="text" name='namePokemon' value={values.namePokemon} onChange={handleChange} />
                <ButtonSearchStyled className="fas fa-search"></ButtonSearchStyled>
            </FormStyled>
            
            {pokemonsSlice.loadingFilter === 'loading' && <span>Filtering...</span>} 
        </ContainerSearchFormStyled>
    )
};

export default SearchForm;