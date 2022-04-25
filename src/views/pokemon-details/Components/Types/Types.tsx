import { TypesPokemonStyled } from "../../../home/Components/Pokemon/Styles";
import { TypePokemonStyledExtended } from "./Styles";

interface TypesProps {
    types: Array<string>
}

const Types = (props: TypesProps) => {
    return (
        <div>
            <h2>Types:</h2>
            <TypesPokemonStyled>
                {
                    props?.types?.map((type: any) => (
                        <TypePokemonStyledExtended key={type} type={type}>{type}</TypePokemonStyledExtended>
                    ))
                }
            </TypesPokemonStyled>
        </div>
    )
}

export default Types;
