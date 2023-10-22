import { useNavigate } from "react-router-dom";
import "../style.css";

interface Props {
      SelectedPage: string;
}

const BottomBar = ({ SelectedPage }: Props) => {
    const navigate = useNavigate();

    const getButton = (page: string) => {

        const src: string = `/${page}.svg`;
        const srcSelected: string = `/${page}_selected.svg`;

        if (page === SelectedPage) {
            return (
                <div className="botbardiv">
                    <button className="BottomBarButtonSelected" onClick={() => {navigate("/login")}}>
                        <img src={srcSelected} alt={page}/>
                    </button>
                    <div className="BottomBarTextSelected">
                        {page}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="botbardiv">
                    <button className="BottomBarButtonUnselected" onClick={() => {navigate("/login")}}>
                        <img src={src} alt={page}/>
                    </button>
                    <div className="BottomBarTextUnselected">
                        {page}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="BottomBar">
            {getButton("Scan")}
            <div className="BotBarSpace"/>
            {getButton("Home")}
            <div className="BotBarSpace"/>
            {getButton("Settings")}
        </div>
    );
};
export default BottomBar;