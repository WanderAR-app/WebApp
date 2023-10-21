import "../App.css";

import WhiteButton from "../Components/Button/WhiteButton";
import BlueButton from "../Components/Button/BlueButton";
import IconButton from "../Components/Button/IconButton";
import WhiteButtonText from "../Components/Text/WhiteButtonText";
import BlueButtonText from "../Components/Text/BlueButtonText";
import TitleText from "../Components/Text/TitleText";
import SubtitleText from "../Components/Text/SubtitleText";
import PlaceholderText from "../Components/Text/PlaceholderText";
import InputText from "../Components/Input/InputText";
import DualContainer from "../Components/Container/DualContainer";
import DualContainerText from "../Components/Text/DualContainerText";
import SwitchOnOff from "../Components/Switch/SwitchOnOff";
import SwitchText from "../Components/Switch/SwitchText";
import DualButton from "../Components/Button/DualButton";
import RoundButton from "../Components/Button/RoundButton";
import GlassMoContainer from "../Components/Container/GlassMoContainer";
import ClassicText from "../Components/Text/ClassicText";
import BlueGlassMoButton from "../Components/Button/BlueGlassMoButton";
import WhiteGlassMoButton from "../Components/Button/WhiteGlassMoButton";
import BlueGlassMoText from "../Components/Text/BlueGlassMoText";
import WhiteGlassMoText from "../Components/Text/WhiteGlassMoText";
import { useEffect, useState } from "react";
import BottomBar from "../Components/Button/BottomBar";
import RoundButtonClicked from "../Components/Button/RoundButtonClicked";
import DirectionContainer from "../Components/Container/DireactionContainer";
import DirectionSmallText from "../Components/Text/DirectionSmallText";
import DirectionBigText from "../Components/Text/DirectionBigText";
import SettingContainer from "../Components/Container/SettingContainer";
import ClassicTextTitle from "../Components/Text/ClassicTextTitle";
import DetailText from "../Components/Text/DetailText";

export const TestPage = () => {
  const [value, setValue] = useState("");

  const handleOnChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <WhiteButton
        OnClick={() => {
          console.log("WhiteButton click");
        }}
      >
        <WhiteButtonText>SIGN UP</WhiteButtonText>
      </WhiteButton>
      <BlueButton
        OnClick={() => {
          console.log("BlueButton click");
        }}
      >
        <BlueButtonText>SIGN IN</BlueButtonText>
      </BlueButton>
      <IconButton
        OnClick={() => {
          console.log("IconButton click");
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google"
          height={50}
        />
      </IconButton>
      <TitleText>Title Text</TitleText>
      <DetailText>Detail Text</DetailText>
      <SubtitleText>Subtitle Text</SubtitleText>
      <PlaceholderText>Placeholder Text</PlaceholderText>
      <InputText
        type="text"
        placeholder="password"
        label="password"
        value={value}
        error={false}
        name="name"
        onChange={handleOnChange}
      />
      <DualContainer>
        <div style={{ display: "flex" }}>
          <DualContainerText> Dual Container </DualContainerText>{" "}
          <SwitchOnOff />
        </div>
      </DualContainer>
      <DualContainer>
        <div style={{ display: "flex" }}>
          <DualContainerText> Dual Container </DualContainerText> <SwitchText />
        </div>
      </DualContainer>
      <DualButton
        OnClick={() => {
          console.log("DualButton click");
        }}
      >
        <DualContainerText>Dual Button</DualContainerText>
      </DualButton>
      <RoundButton
        OnClick={() => {
          console.log("RoundButton click");
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Croix"
          width={30}
          height={30}
        />
      </RoundButton>
      <GlassMoContainer>
        <ClassicTextTitle>
          Notre Concept Unique
        </ClassicTextTitle>
        <ClassicText>
          Wander AR est une application de guidage en intérieur disponible dans
          les bâtiments utilisant nos services. Les conditions générales
          d’utilisation peuvent être changées à tout moment. Pour les consulter
          ou être notifié de tout changement, allez à Paramètres/Politique de
          confidentialité.
        </ClassicText>
        <BlueGlassMoButton
          OnClick={() => {
            console.log("BlueGlassMoButton click");
          }}
        >
          <WhiteGlassMoText>Blue Button</WhiteGlassMoText>
        </BlueGlassMoButton>
        <WhiteGlassMoButton
          OnClick={() => {
            console.log("WhiteButton click");
          }}
        >
          <BlueGlassMoText>White Button</BlueGlassMoText>
        </WhiteGlassMoButton>
      </GlassMoContainer>

      <BottomBar SelectedPage="Settings"/>
      <RoundButtonClicked>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Croix"
          width={30}
          height={30}
        />
      </RoundButtonClicked>
      <DirectionContainer>
        <DirectionSmallText>
          Dans 9 metres
        </DirectionSmallText>
        <DirectionBigText>
          Tournez à droite
        </DirectionBigText>
      </DirectionContainer>
      <SettingContainer
        OnClick={() => {
          console.log("SettingContainer click");
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google"
          height={30}
        />
        <DualContainerText> Dual Container </DualContainerText>{" "}
      </SettingContainer>
    </div>
  );
};
