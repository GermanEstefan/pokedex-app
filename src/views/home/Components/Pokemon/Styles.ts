import styled from "styled-components";

interface propsTypePokemon {
    type: string
}

export const PokemonContainerStyled = styled.div`
    display:flex;
    flex-direction:column;
    margin: 0px 20px 0px 0px;
    padding: 15px 25px;
    cursor: pointer;
    border-radius: 5px;
    transition: .3s ease-in;
    &:hover{
        outline:1px solid grey;
        
    }
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
        : props.type === 'fairy' ? '#FF69B4'
        :'none'
    };
    border-radius: 3px;
    padding: 8px 5px;
    margin-right: 10px;
`;