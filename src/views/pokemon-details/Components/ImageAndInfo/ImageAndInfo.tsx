import { ImageAndInfoStyled, ImageStyled, InfoContainerStyled } from "./Styles"

interface ImageAndInfoProps {
    img: string
    imgAlt: string
}

const ImageAndInfo = (props: ImageAndInfoProps) => {
    return (
        <ImageAndInfoStyled>
            <ImageStyled src={props.img} alt={props.imgAlt} />
            <InfoContainerStyled>
                ALGO ACA VA A VER
            </InfoContainerStyled>
        </ImageAndInfoStyled>
    )
}

export default ImageAndInfo
