import { ChangeEvent, useState } from "react";

import "./App.css";
import WhiteButton from "./Components/Button/WhiteButton";
import BlueButton from "./Components/Button/BlueButton";
import IconButton from "./Components/Button/IconButton";
import WhiteButtonText from "./Components/Text/WhiteButtonText";
import BlueButtonText from "./Components/Text/BlueButtonText";
import TitleText from "./Components/Text/TitleText";
import SubtitleText from "./Components/Text/SubtitleText";
import PlaceholderText from "./Components/Text/PlaceholderText";
import InputText from "./Components/Input/InputText";
import DualContainer from "./Components/Container/DualContainer";
import DualContainerText from "./Components/Text/DualContainerText";
import SwitchOnOff from "./Components/Switch/SwitchOnOff";
import SwitchText from "./Components/Switch/SwitchText";
import DualButton from "./Components/Button/DualButton";
import RoundButton from "./Components/Button/RoundButton";

function App() {

  const [value, setValue] = useState('')

const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value)
}

  return (
    <div className="App">
        <WhiteButton OnClick={() => {console.log("WhiteButton click")}}>
          <WhiteButtonText>
            SIGN UP
          </WhiteButtonText>
        </WhiteButton>
        <BlueButton OnClick={() => {console.log("BlueButton click")}}>
          <BlueButtonText>
            SIGN IN
          </BlueButtonText>
        </BlueButton>
        <IconButton OnClick={() => {console.log("IconButton click")}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" height={ 50 } />
        </IconButton>
        <TitleText>
          Title Text
        </TitleText>
        <SubtitleText>
          Subtitle Text
        </SubtitleText>
        <PlaceholderText>
          Placeholder Text
        </PlaceholderText>
        <InputText type="text" placeholder="password" label="password" value={value} error={false} name="name" onChange={handleOnChange} />
        <DualContainer>
          <div style={{display: "flex"}}>
            <DualContainerText> Dual Container </DualContainerText> <SwitchOnOff/>
          </div>
        </DualContainer>
        <DualContainer>
          <div style={{display: "flex"}}>
            <DualContainerText> Dual Container </DualContainerText> <SwitchText/>
          </div>
        </DualContainer>
        <DualButton OnClick={() => {console.log("DualButton click")}}>
          <DualContainerText>
            Dual Button
          </DualContainerText>
        </DualButton>
        <RoundButton OnClick={() => {console.log("RoundButton click")}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Croix" width={ 30 } height={ 30 } />
        </RoundButton>
    </div>
  );
}

export default App;
