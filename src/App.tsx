import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./views/home";
import Pokemon from "./views/pokemon-details";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/pokedex-app/" element={<Home />} />
      <Route path="/pokedex-app/:pokemonId" element={<Pokemon />} />
      <Route path="*" element={<h1>This page doesnt exist</h1>} />
    </Routes>
  </BrowserRouter>
)

export default App;
