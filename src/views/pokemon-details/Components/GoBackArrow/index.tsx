import { useNavigate } from "react-router-dom";
import { GoBackArrowStyled } from "./Style";

const GoBackArrow = () => {

    const navigate = useNavigate();

    return (
        <GoBackArrowStyled className="fas fa-angle-left" onClick={() => navigate('/pokedex-app')}></GoBackArrowStyled>
    )
}

export default GoBackArrow;
