import Header from "./Components/Hedaer";
import Pokemons from "./Components/Pokemons";
import SearchForm from "./Components/SearchForm";
import ViewMorePokemons from "./Components/ViewMorePokemons";
import { IndexStyled } from "./IndexStyled";

const Home = () => ((
    <IndexStyled>
        <Header />
        <SearchForm />
        <Pokemons />
        <ViewMorePokemons/>
    </IndexStyled>
))

export default Home;