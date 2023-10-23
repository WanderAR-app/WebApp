import React from 'react';
import './CguPage.css';

import GlassMoContainer from '../Components/Container/GlassMoContainer';
import BlueGlassMoText from '../Components/Text/BlueGlassMoText';
import WhiteGlassMoText from '../Components/Text/WhiteGlassMoText';
import TitleText from '../Components/Text/TitleText';
import ClassicText from '../Components/Text/ClassicText';
import BlueGlassMoButton from '../Components/Button/BlueGlassMoButton';
import WhiteGlassMoButton from '../Components/Button/WhiteGlassMoButton';

import logo from '../assets/WanderAR_Cgu.svg';

export const CguPage = () => {

  const handleAccept = () => {
    window.location.href = '/home';
  };

  const handleRefuse = () => {
    window.close();
  };

  return (
    <div className="cgu-page">
      <div className="container">
        <div className="logo-container-cgu">
          <img src={logo} alt="Logo de WanderAR" />
        </div>
        <div className="button-container-cgu">
          <GlassMoContainer>
            <div className="glass-container-cgu">
              <div className="title-container-cgu">
                <TitleText>Conditions générales<br />d’utilisation</TitleText>
              </div>
              <div className="texte-container-cgu">
                <ClassicText>
                  <p>Wander AR est une application de guidage en intérieur disponible dans les bâtiments utilisant nos services.</p>
                  <p>Les conditions générales d’utilisation peuvent être changées à tout moment. Pour les consulter ou être notifié de tout changement, allez à Paramètres/Politique de confidentialité.</p>
                </ClassicText>
              </div>
              <div className="button-row-cgu">
                <div className="blue-button-cgu">
                  <BlueGlassMoButton OnClick={handleAccept}>
                    <WhiteGlassMoText>Accepter</WhiteGlassMoText>
                  </BlueGlassMoButton>
                </div>
                <div className="white-button-cgu">
                  <WhiteGlassMoButton OnClick={handleRefuse}>
                    <BlueGlassMoText>Refuser</BlueGlassMoText>
                  </WhiteGlassMoButton>
                </div>
              </div>
            </div>
          </GlassMoContainer>
        </div>
      </div>
    </div>
  );
};

export default CguPage;