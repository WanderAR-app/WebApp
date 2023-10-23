import React from 'react';
import './SettingPage.css';

import TitleText from '../Components/Text/TitleText';
import SettingContainer from '../Components/Container/SettingContainer';
import DualContainerText from '../Components/Text/DualContainerText';
import BottomBar from '../Components/Button/BottomBar';

import generalImage from '../assets/general.svg';
import voixImage from '../assets/voix.svg';
import navigationImage from '../assets/navigation.svg';
import policyImage from '../assets/policy.svg';
import proposImage from '../assets/propos.svg';

export const SettingPage = () => {

  return (
    <div className="container">
      <div className="title-setting">
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
          style={{ width: '25px', height: '25px' }}
        />
        <DualContainerText> Général </DualContainerText>
      </SettingContainer>

      <SettingContainer
        OnClick={() => {
          window.location.href = '/voix';
        }}
      >
        <img
          src={voixImage}
          alt="Voix"
          style={{ width: '25px', height: '23px' }}
        />
        <DualContainerText> Voix et sons </DualContainerText>
      </SettingContainer>

      <SettingContainer
        OnClick={() => {
          window.location.href = '/navigation';
        }}
      >
        <img
          src={navigationImage}
          alt="Navigation"
          style={{ width: '25px', height: '25px' }}
        />
        <DualContainerText> Navigation </DualContainerText>
      </SettingContainer>

      <SettingContainer
        OnClick={() => {
          window.location.href = '/politique';
        }}
      >
        <img
          src={policyImage}
          alt="Politique de confidentialité"
          style={{ width: '23px', height: '25px' }}
        />
        <DualContainerText> Politique de confidentialité </DualContainerText>
      </SettingContainer>
      <SettingContainer
        OnClick={() => {
          window.location.href = '/propos';
        }}
      >
        <img
          src={proposImage}
          alt="A propos"
          style={{ width: '25px', height: '25px' }}
        />
        <DualContainerText> A propos </DualContainerText>
      </SettingContainer>

      <div className="bottom-bar-setting">
        <BottomBar SelectedPage="Settings"/>
      </div>
    </div>
  );
};

export default SettingPage;
