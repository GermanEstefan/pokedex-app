import { HeaderStyled, TitleAndLinksStyled, LinksStyled, IconGitHubStyled, InfoAppStyled, IconLinkedingStyled } from "./Style";

const Header = () => ((
    <HeaderStyled>

        <TitleAndLinksStyled>

            <h1 style={{color:"#2178db"}}>Pokedex</h1>

            <LinksStyled>
                <a href="https://github.com/GermanEstefan/pokedex-app" target='_blank' rel="noreferrer" style={{color: '#2178db'}}><IconGitHubStyled className="fab fa-github"></IconGitHubStyled></a>
                <a href="https://www.linkedin.com/in/german-estefan-313075174/" target='_blank' rel="noreferrer" style={{color: '#2178db'}}><IconLinkedingStyled className="fab fa-linkedin"></IconLinkedingStyled></a>
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