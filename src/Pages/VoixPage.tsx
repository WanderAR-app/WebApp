import React from 'react';
import './VoixPage.css';

import RoundButton from '../Components/Button/RoundButton';
import TitleText from '../Components/Text/TitleText';
import DetailText from '../Components/Text/DetailText';
import DualContainer from "../Components/Container/DualContainer";
import DualContainerText from '../Components/Text/DualContainerText';
import SwitchOnOff from "../Components/Switch/SwitchOnOff";
import BottomBar from '../Components/Button/BottomBar';
import SwitchMultiChoice from "../Components/Switch/SwitchMultiChoice";

import backImage from '../assets/retour.svg';

export const VoixPage = () => {

  return (
    <div className="container">
      <div className="button-back-voix">
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
      <div className="titre-voix">
        <TitleText>Voix et sons</TitleText>
      </div>
      <div className="detail-voix">
        <DetailText>Guidage vocal</DetailText>
      </div>
      <div className="container-voix">
        <DualContainer>
          <div style={{ display: "flex" }}>
            <DualContainerText>Sons</DualContainerText>
            <SwitchOnOff />
          </div>
        </DualContainer>
        <DualContainer>
          <div style={{ display: "flex" }}>
            <div className="container-text-voix">
              <DualContainerText> Volume </DualContainerText>
            </div>
          </div>
        </DualContainer>
      </div>
      <div className="detail-2-voix">
        <DetailText>Commande vocale</DetailText>
      </div>
      <div className="container-2-voix">
      <DualContainer>
        <div style={{ display: "flex" }}>
          <DualContainerText>Langue</DualContainerText>
          <SwitchMultiChoice options={['Français', 'Anglais', 'Hongrois']} />
        </div>
      </DualContainer>
      </div>
      <div className="bottom-bar">
        <BottomBar SelectedPage="Settings"/>
      </div>
    </div>
  );
};

export default VoixPage;