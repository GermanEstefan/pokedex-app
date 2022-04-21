import styled from "styled-components";

interface propsTypePokemon {
    type: string
}

export const PokemonContainerStyled = styled.div`
    display:flex;
    flex-direction:column;
    margin: 0px 30px 30px 0px;
    cursor: pointer;
`;

export const IdPokemonStyled = styled.span`
    color: gray;
`;

export const TypesPokemonStyled = styled.ul`
    list-style:none;
    padding:0;
    display:flex;
`;

export const TypePokemonStyled = styled.li<propsTypePokemon>`
    color:#f2f2f2;
    background-color: ${
        props => props.type === 'poison' ? '#009933' 
        : props.type === 'water' ? '#2A5DE1'
        : props.type === 'fire' ? 'red'
        : props.type === 'grass' ? '#006600'
        : props.type === 'bug' ? '#33cc33' 
        : props.type === 'ground' ? '#996633'
        : props.type === 'dark' ? '#000000'
        : props.type === 'shadow' ? '#669999'
        : props.type === 'electric' ? '#ffff00'
        : props.type === 'flying' ? '#00ffff'
        : props.type === 'normal' ? '#669999'
        :'none'
    };
    border-radius: 3px;
    padding: 3px;
    margin-right: 10px;
`;