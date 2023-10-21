import React from 'react';
import './PolitiquePage.css';

import RoundButton from '../Components/Button/RoundButton';
import TitleText from '../Components/Text/TitleText';
import GlassMoContainer from '../Components/Container/GlassMoContainer';
import ClassicTextTitle from '../Components/Text/ClassicTextTitle';
import ClassicText from '../Components/Text/ClassicText';
import BottomBar from '../Components/Button/BottomBar';

import backImage from '../assets/retour.svg';

const PolitiquePage: React.FC = () => {

  return (
    <div className="container">
      <div className="button-back-politque">
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
      <div className="titre-politque">
        <TitleText>Politique de confidentialité</TitleText>
      </div>
      <div className="button-container-politque">
        <GlassMoContainer>
          <div className="glass-container-politque">
            <div className="texte-container-politque">
              <ClassicText>
                <p>Chez WanderAR, nous accordons une grande importance à la protection de la vie privée de nos utilisateurs et nous nous engageons à protéger les informations personnelles qu'ils nous confient. Cette politique décrit les types d'informations que nous collectons, comment nous les utilisons et les mesures de sécurité que nous mettons en place pour les protéger.</p>
              </ClassicText>
              <ClassicTextTitle>
                <p>Collecte et utilisation des informations</p>
              </ClassicTextTitle>
              <ClassicText>
                <p>Nous collectons des informations personnelles lorsque nos utilisateurs créent un compte, notamment leur nom et leur adresse email. Nous collectons également des données de localisation lorsque l'application est utilisée pour fournir des expériences de réalité augmentée. Ces informations sont utilisées pour personnaliser l'expérience de l'utilisateur et pour améliorer les fonctionnalités de l'application. Nous ne partageons ni ne vendons aucune information personnelle à des tiers.</p>
              </ClassicText>
              <ClassicTextTitle>
                <p>Mesures de sécurité</p>
              </ClassicTextTitle>
              <ClassicText>
                <p>Nous prenons les mesures de sécurité appropriées pour protéger contre l'accès non autorisé, la modification, la divulgation ou la destruction des informations personnelles. Nous utilisons le chiffrement pour protéger les informations sensibles transmises en ligne et stockons toutes les informations personnelles sur des serveurs sécurisés.</p>
              </ClassicText>
              <ClassicTextTitle>
                <p>Modifications de cette politique</p>
              </ClassicTextTitle>
              <ClassicText>
                <p>Nous pouvons mettre à jour cette politique de temps à autre pour refléter les changements dans nos pratiques ou les lois en vigueur. Nous informerons les utilisateurs de tout changement par le biais de l'application ou par email.</p>
              </ClassicText>
              <ClassicTextTitle>
                <p>Contactez-nous</p>
              </ClassicTextTitle>
              <ClassicText>
                <p>Si vous avez des questions ou des préoccupations concernant cette politique ou la manière dont nous traitons vos informations personnelles, veuillez nous contacter à l'adresse support@wanderar.com.</p>
              </ClassicText>
            </div>
          </div>
        </GlassMoContainer>
        <div className="bottom-bar">
          <BottomBar SelectedPage="Settings"/>
        </div>
      </div>
    </div>
  );
};

export default PolitiquePage;
