import { HeaderStyled, TitleAndLinksStyled, LinksStyled, IconGitHubStyled, InfoAppStyled } from "./Style";

const Header = () => ((
    <HeaderStyled>

        <TitleAndLinksStyled>

            <h1 style={{color:"#2178db"}}>Pokedex</h1>

            <LinksStyled>
                <IconGitHubStyled className="fab fa-github"></IconGitHubStyled>
                <i className="fab fa-linkedin"></i>
            </LinksStyled>

        </TitleAndLinksStyled>

        <InfoAppStyled>
            This app is maked with ReactJS - TypeScript and Redux Toolkit. This data
            is provide from APIRest "PokeApi". The finality of this proyect is train
            Redux Toolkit and TypeScript
        </InfoAppStyled>

    </HeaderStyled>
))

export default Header;