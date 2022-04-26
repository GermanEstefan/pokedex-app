import { capitalizeString } from "../../../../helpers/capitalizeString";
import { TypesPokemonStyled } from "../../../home/Components/Pokemon/Styles";
import { TypePokemonStyledExtended } from "./Styles";

interface TypesProps {
    types: Array<string>
}

const Types = (props: TypesProps) => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2 style={{color:'#2178db'}}>Types:</h2>
            <TypesPokemonStyled>
                {
                    props?.types?.map((type: any) => (
                        <TypePokemonStyledExtended key={type} type={type}>{type && capitalizeString(type)}</TypePokemonStyledExtended>
                    ))
                }
            </TypesPokemonStyled>
        </div>
    )
}

export default Types;
