import styled from "styled-components";
import { TypePokemonStyled } from "../../../home/Components/Pokemon/Styles";

export const TypesContainer = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`;

export const TypePokemonStyledExtended = styled(TypePokemonStyled)`
    padding:5px 10px;
    font-size:1.5rem;
`;