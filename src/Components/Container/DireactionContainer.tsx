import { ReactNode } from "react";
import "../style.css";

interface Props {
  children: ReactNode;
}

const DirectionContainer = ({ children }: Props) => {
  return <div className="DirectionContainer">
        <div className="DirectionIcon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" height={50} />
        </div>
        <div className="DirectionText">
            {children}
        </div>
    </div>;
};
export default DirectionContainer;
