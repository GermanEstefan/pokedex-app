import { HeaderStyled, TitleAndLinksStyled, LinksStyled, IconGitHubStyled, InfoAppStyled } from "./Style";

const Header = () => ((
    <HeaderStyled>

        <TitleAndLinksStyled>

            <h1>Pokedex</h1>

            <LinksStyled>
                <IconGitHubStyled className="fab fa-github"></IconGitHubStyled>
                <i className="fab fa-linkedin"></i>
            </LinksStyled>

        </TitleAndLinksStyled>

        <InfoAppStyled>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nobis fugiat debitis error,
            voluptatem soluta, sed adipisci deserunt, obcaecati tempora voluptate corporis quas mollitia
            expedita? Voluptates recusandae nobis consequatur pariatur?
        </InfoAppStyled>

    </HeaderStyled>
))

export default Header;