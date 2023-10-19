import React from 'react';
import './SettingPage.css';

import TitleText from '../Components/Text/TitleText';
import SettingContainer from '../Components/Container/SettingContainer';
import DualContainerText from '../Components/Text/DualContainerText';
import BottomBar from '../Components/Button/BottomBar';

import generalImage from '../assets/general.svg';
import voixImage from '../assets/voix.svg';
import navigationImage from '../assets/navigation.svg';
import politiqueImage from '../assets/politique.svg';
import proposImage from '../assets/propos.svg';

const SettingPage: React.FC = () => {

  return (
    <div className="container">
      <div className="titre">
        <TitleText>Paramètres</TitleText>
      </div>

      <SettingContainer
        OnClick={() => {
          console.log("General click");
        }}
      >
        <img
          src={generalImage}
          alt="General"
          height={30}
        />
        <DualContainerText> Général </DualContainerText>{" "}
      </SettingContainer>

      <SettingContainer
        OnClick={() => {
          console.log("Voix click");
        }}
      >
        <img
          src={voixImage}
          alt="Voix"
          height={30}
        />
        <DualContainerText> Voix et sons </DualContainerText>{" "}
      </SettingContainer>

      <SettingContainer
        OnClick={() => {
          console.log("Navigation click");
        }}
      >
        <img
          src={navigationImage}
          alt="Navigation"
          height={30}
        />
        <DualContainerText> Navigation </DualContainerText>{" "}
      </SettingContainer>

      <SettingContainer
        OnClick={() => {
          console.log("Politique click");
        }}
      >
        <img
          src={politiqueImage}
          alt="Politique de confidentialité"
          height={30}
        />
        <DualContainerText> Politique de confidentialité </DualContainerText>{" "}
      </SettingContainer>

      <SettingContainer
        OnClick={() => {
          console.log("Propos click");
        }}
      >
        <img
          src={proposImage}
          alt="A propos"
          height={30}
        />
        <DualContainerText> A propos </DualContainerText>{" "}
      </SettingContainer>
      <div className="bottom-bar">
        <BottomBar SelectedPage="Settings"/>
      </div>
    </div>
  );
};

export default SettingPage;
