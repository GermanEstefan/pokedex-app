
import { capitalizeString } from "../../../../helpers/capitalizeString"
import { Stats } from "../../../../redux/slices/pokemonDetailsSlice"
import { ImageAndInfoStyled, ImageStyled, InfoContainerSonStyled, InfoContainerStyled, InfoContainerSonLisItemStyled } from "./Styles"

interface ImageAndInfoProps {
    img: string
    imgAlt: string
    stats: Array<Stats>
    weight: number | string
    abilities: Array<string>
}

const ImageAndInfo = (props: ImageAndInfoProps) => {
    return (
        <ImageAndInfoStyled>

            <ImageStyled src={props.img} alt={props.imgAlt} />

            <InfoContainerStyled>

                <InfoContainerSonStyled>
                    <strong>Stats</strong>
                    <ul>
                        {
                            props?.stats?.map(stat => (
                                <InfoContainerSonLisItemStyled key={stat.statName}>
                                    <strong>{capitalizeString(stat.statName)}:</strong><span> {stat.points} </span>
                                </InfoContainerSonLisItemStyled>
                            ))
                        }
                    </ul>
                </InfoContainerSonStyled>

                <InfoContainerSonStyled>
                    <strong>Abilities</strong>
                    <ul>
                        {
                            props?.abilities?.map(ability => (
                                <InfoContainerSonLisItemStyled key={ability}>
                                    <strong>Name: </strong><span>{capitalizeString(ability)}</span> 
                                </InfoContainerSonLisItemStyled>
                            ))
                        }
                    </ul>
                </InfoContainerSonStyled>

                <span><strong>Weight: </strong>{props.weight}</span>

            </InfoContainerStyled>
        </ImageAndInfoStyled>
    )
}

export default ImageAndInfo
