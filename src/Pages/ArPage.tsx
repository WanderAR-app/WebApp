import "./ArPage.css";

import DirectionContainer from "../Components/Container/DireactionContainer";
import DirectionSmallText from "../Components/Text/DirectionSmallText";
import DirectionBigText from "../Components/Text/DirectionBigText";
import RoundButton from "../Components/Button/RoundButton";


export const ArPage = () => {
    return (
        <div className="AR_page">
            <div className="background">
                <div className="upper_pannel">
                    <DirectionContainer>
                        <DirectionSmallText>Dans 9 metres</DirectionSmallText>
                        <DirectionBigText>Tournez à droite</DirectionBigText>
                    </DirectionContainer>
                </div>
            </div>
            <div className="footer">
                <div className="button_left">
                    <RoundButton>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                          alt="Google"
                        />
                    </RoundButton>
                </div>
                <div className="info_text">
                    <div className="timer">
                        <DirectionBigText>5 min</DirectionBigText>
                    </div>
                    <DirectionSmallText>200m | 10:34</DirectionSmallText>
                </div>
                <div className="button_right">
                <RoundButton>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                          alt="Google"
                        />
                    </RoundButton>
                </div>
            </div>
        </div>
    );
};