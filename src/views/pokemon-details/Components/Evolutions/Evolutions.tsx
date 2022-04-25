import { DataEvo } from "../../../../redux/slices/pokemonDetailsSlice";
import { ContainerEvolutionsStyled, EvolutionContainerStytled, PokemonEvolutionStyled } from "./Styles";

interface EvolutionsProps {
    pokemonsEvo: Array<DataEvo>
}

const Evolutions = (props: EvolutionsProps) => {
    return (
        <EvolutionContainerStytled>
            <h2>Evolutions:</h2>
            <ContainerEvolutionsStyled>
                {
                    props.pokemonsEvo?.map(evo => (
                        <PokemonEvolutionStyled key={evo.nameEvo}>
                            <strong>{evo.nameEvo}</strong>
                            <br />
                            <img src={evo.img} alt={evo.nameEvo} width="130px" height="130px" />
                        </PokemonEvolutionStyled>
                    ))
                }
            </ContainerEvolutionsStyled>
        </EvolutionContainerStytled>
    )
}

export default Evolutions;
