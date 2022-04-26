import { capitalizeString } from "../../../../helpers/capitalizeString";
import { IdStyled, NameAndIdStyled } from "./Style";

interface propsNameAndId {
    pokemonName: string
    pokemonId: string | number
}

const NameAndId = (props: propsNameAndId) => {
    return (
        <NameAndIdStyled>
            <h1 style={{color:'#2178db'}}>{props.pokemonName && capitalizeString(props.pokemonName)}</h1>
            <IdStyled>Nº{props.pokemonId}</IdStyled>
        </NameAndIdStyled>
    )
}

export default NameAndId;
