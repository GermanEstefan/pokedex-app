import styled from "styled-components";

export const HeaderStyled = styled.header`
    width:100vw;
    align-items:center;
    flex-direction:column;
    text-align:center;
    padding: 0px 100px;
`;

export const TitleAndLinksStyled = styled.div`
    justify-content:center;
    display:flex;
    align-items:center;
`;

export const LinksStyled = styled.div`
    position:absolute;
    right:30px;
    font-size:2.2rem;
    color:#2178db;
`;

export const IconGitHubStyled = styled.i`
    margin-right:15px;
    transition:.3s ease-in;
    &:hover{
        color: #3388e8;
    }
`;

export const IconLinkedingStyled = styled.i`
    transition:.3s ease-in;
    &:hover{
        color: #3388e8;
    }
`;

export const InfoAppStyled = styled.p`
    font-size:1.5rem;
`;