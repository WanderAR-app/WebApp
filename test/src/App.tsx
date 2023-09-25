import WhiteButton from "./Components/Button/WhiteButton";
import BlueButton from "./Components/Button/BlueButton";
import IconButton from "./Components/Button/IconButton";
import WhiteButtonText from "./Components/Text/WhiteButtonText";
import BlueButtonText from "./Components/Text/BlueButtonText";
import TitleText from "./Components/Text/TitleText";
import SubtitleText from "./Components/Text/SubtitleText";
import PlaceholderText from "./Components/Text/PlaceholderText";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <WhiteButton OnClick={() => {console.log("WhiteButton click")}}>
          <WhiteButtonText>
            SIGN UP
          </WhiteButtonText>
        </WhiteButton>
      </div>
      <div>
        <BlueButton OnClick={() => {console.log("BlueButton click")}}>
          <BlueButtonText>
            SIGN IN
          </BlueButtonText>
        </BlueButton>
      </div>
      <div>
        <IconButton OnClick={() => {console.log("IconButton click")}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" height={ 50 } />
        </IconButton>
      </div>
      <div>
        <TitleText>
          Title Text
        </TitleText>
      </div>
      <div>
        <SubtitleText>
          Subtitle Text
        </SubtitleText>
      </div>
      <div>
        <PlaceholderText>
          Placeholder Text
        </PlaceholderText>
      </div>
    </div>
  );
}

export default App;
