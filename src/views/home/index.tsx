import { Outlet } from "react-router-dom";
import Header from "./Components/Hedaer";
import Pokemons from "./Components/Pokemons";
import SearchForm from "./Components/SearchForm";
import { IndexStyled } from "./IndexStyled";

const Home = () => ((
    <IndexStyled>
        <Header />
        <SearchForm />
        <Pokemons />
        <Outlet />
    </IndexStyled>
))

export default Home;