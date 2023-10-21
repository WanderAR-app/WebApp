import React from 'react';
import './NavigationPage.css';

import RoundButton from '../Components/Button/RoundButton';
import TitleText from '../Components/Text/TitleText';
import DetailText from '../Components/Text/DetailText';
import DualContainer from "../Components/Container/DualContainer";
import DualContainerText from "../Components/Text/DualContainerText";
import SwitchOnOff from "../Components/Switch/SwitchOnOff";
import BottomBar from '../Components/Button/BottomBar';

import backImage from '../assets/retour.svg';

const NavigationPage: React.FC = () => {
  return (
    <div className="container">
      <div className="button-back-navigation">
        <RoundButton
          OnClick={() => {
            window.location.href = '/setting';
          }}
        >
          <img
            src={backImage}
            alt="Back"
            width={30}
            height={30}
          />
        </RoundButton>
      </div>
      <div className="titre-navigation">
        <TitleText>Navigation</TitleText>
      </div>
      <div className="detail-navigation">
        <DetailText>Préférences</DetailText>
        <DualContainer>
          <div style={{ display: "flex" }}>
            <DualContainerText>Eviter les escaliers</DualContainerText>
            <SwitchOnOff />
          </div>
        </DualContainer>
        <DualContainer>
          <div style={{ display: "flex" }}>
            <DualContainerText>Eviter les escalators</DualContainerText>
            <SwitchOnOff />
          </div>
        </DualContainer>
        <DualContainer>
          <div style={{ display: "flex" }}>
            <DualContainerText>Eviter les ascenseurs</DualContainerText>
            <SwitchOnOff />
          </div>
        </DualContainer>
      </div>
      <div className="bottom-bar">
        <BottomBar SelectedPage="Settings" />
      </div>
    </div>
  );
};

export default NavigationPage;
