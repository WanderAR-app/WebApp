import React from 'react';
import './GeneralPage.css';

import RoundButton from '../Components/Button/RoundButton';
import TitleText from '../Components/Text/TitleText';
import SwitchText from "../Components/Switch/SwitchText";
import DualContainer from "../Components/Container/DualContainer";
import DualContainerText from '../Components/Text/DualContainerText';
import SwitchOnOff from "../Components/Switch/SwitchOnOff";
import BottomBar from '../Components/Button/BottomBar';
import SwitchMultiChoice from "../Components/Switch/SwitchMultiChoice";

import backImage from '../assets/retour.svg';

export const GeneralPage = () => {

  return (
    <div className="container" style={{ overflow: 'hidden' }}>
      <div className="button-back-general">
        <RoundButton
          OnClick={() => {
            window.location.href = '/setting';
            }}
        >
          <img
            src={backImage}
            alt="Back"
          />
        </RoundButton>
      </div>
      <div className="title-general">
        <TitleText>Général</TitleText>
      </div>
      <div className="container-general">
        <DualContainer>
          <div style={{ display: "flex" }}>
            <DualContainerText>Langue</DualContainerText>
            <SwitchMultiChoice options={['Français', 'Anglais', 'Hongrois']} />
          </div>
        </DualContainer>
        <DualContainer>
          <div style={{ display: "flex" }}>
            <DualContainerText> Dual Container </DualContainerText> <SwitchText />
          </div>
        </DualContainer>
        <DualContainer>
          <div style={{ display: "flex" }}>
            <DualContainerText>Thème sombre</DualContainerText>
            <SwitchOnOff />
          </div>
        </DualContainer>
      </div>
      <div className="bottom-bar-general">
        <BottomBar SelectedPage="Settings"/>
      </div>
    </div>
  );
};

export default GeneralPage;