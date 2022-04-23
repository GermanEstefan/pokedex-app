import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./views/home";
import Pokemon from "./views/pokemon-details";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:pokemonId" element={<Pokemon />} />
    </Routes>
  </BrowserRouter>
)

export default App;
