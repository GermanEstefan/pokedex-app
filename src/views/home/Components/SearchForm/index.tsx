import { ContainerSearchFormStyled, TitleFormStyled, FormStyled, ButtonSearchStyled } from "./Style";

const SearchForm = () => {

    return (
        <ContainerSearchFormStyled>
            <TitleFormStyled>Search any pokemon</TitleFormStyled>
            <FormStyled onSubmit={() => alert('submited')}>
                <input type="text" />
                <ButtonSearchStyled className="fas fa-search"></ButtonSearchStyled>
            </FormStyled>
        </ContainerSearchFormStyled>
    )
};

export default SearchForm;