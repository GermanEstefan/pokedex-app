import styled from "styled-components";
import { TypePokemonStyled } from "../../../home/Components/Pokemon/Styles";

export const GoBackArrowStyled = styled.i`
    position: fixed;
    top: 10px;
    left:20px;
    font-size: 3.5rem;
    color:#2178db;
`;

export const TypesContainer = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`;

export const TypePokemonStyledExtended = styled(TypePokemonStyled)`
    padding:5px 10px;
    font-size:1.5rem;
`;