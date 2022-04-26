import styled from "styled-components";

export const ContainerSearchFormStyled = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:30px;
`;

export const TitleFormStyled = styled.strong`
    margin-bottom:10px;
`;

export const FormStyled = styled.form`
    position:relative;
`;

export const InputStyled = styled.input`
    border:none;
    background-color:transparent;
    outline: 2px solid #2178db;
    padding:2px 0px 2px 5px;
    width:250px;
    border-radius:5px;
    transition: .3s ease-in;
    &:focus{
        outline: none;
        background-color:#2178db;
        color: white;
    }
`;

export const ButtonSearchStyled = styled.i`
    position:absolute;
    top:4px;
    right:-30px;
    font-size:1.3rem;
    color:#2178db;
`;