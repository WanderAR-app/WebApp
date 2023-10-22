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

export const SettingPage = () => {

  return (
    <div className="container">
      <div className="titre-setting">
        <TitleText>Paramètres</TitleText>
      </div>

      <SettingContainer
        OnClick={() => {
          window.location.href = '/general';
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
          window.location.href = '/voix';
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
          window.location.href = '/navigation';
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
          window.location.href = '/politique';
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
          window.location.href = '/propos';
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
