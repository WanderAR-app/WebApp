import React from 'react';
import './ProposPage.css';

import RoundButton from '../Components/Button/RoundButton';
import TitleText from '../Components/Text/TitleText';
import GlassMoContainer from '../Components/Container/GlassMoContainer';
import ClassicTextTitle from '../Components/Text/ClassicTextTitle';
import ClassicText from '../Components/Text/ClassicText';
import BottomBar from '../Components/Button/BottomBar';

import backImage from '../assets/retour.svg';

export const ProposPage = () => {

  return (
    <div className="container" style={{ overflow: 'hidden' }}>
      <div className="button-back-propos">
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
      <div className="titre-propos">
        <TitleText>Notes et à propos</TitleText>
      </div>
      <div className="button-container-propos">
        <GlassMoContainer>
          <div className="glass-container-propos">
            <div className="texte-container-propos">
              <ClassicText>
                <p>WanderAR est une entreprise innovante spécialisée dans le développement d'une application de navigation en intérieur révolutionnaire. Notre application permet aux utilisateurs de se connecter facilement via le Bluetooth de leur téléphone à des balises spécialement conçues et déployées dans des infrastructures diverses. Grâce à cette technologie de pointe, nous offrons une expérience de géolocalisation précise et fiable en intérieur, guidant les utilisateurs de manière intuitive du point A au point B.</p>
              </ClassicText>
              <ClassicTextTitle>
                <p>Notre Concept Unique</p>
              </ClassicTextTitle>
              <ClassicText>
                <p>WanderAR se distingue des autres applications de navigation en exploitant une technologie sophistiquée de balises. Ces balises, placées stratégiquement dans les espaces intérieurs, interagissent avec l'application de l'utilisateur pour déterminer avec précision leur position en temps réel. Cette approche novatrice permet aux utilisateurs de se repérer facilement, que ce soit dans des centres commerciaux, des aéroports, des musées, des campus universitaires ou d'autres grandes infrastructures intérieures.</p>
              </ClassicText>
              <ClassicTextTitle>
                <p>Les Avantages pour les Utilisateurs</p>
              </ClassicTextTitle>
              <ClassicText>
                <p>En utilisant l'application WanderAR, les utilisateurs peuvent profiter de nombreux avantages pratiques. Ils peuvent naviguer sans effort dans des lieux inconnus, trouver rapidement des magasins, des points d'intérêt, des salles de réunion ou des sorties d'urgence, le tout avec une précision de localisation inégalée. De plus, notre application permet une navigation fluide et sans stress, améliorant ainsi l'expérience globale des utilisateurs lorsqu'ils se déplacent en intérieur.</p>
              </ClassicText>
              <ClassicTextTitle>
                <p>Technologie de Pointe</p>
              </ClassicTextTitle>
              <ClassicText>
                <p>Au cœur de WanderAR se trouvent des technologies de pointe, combinant le potentiel du Bluetooth et des balises pour assurer une géolocalisation intérieure fiable. Notre équipe d'experts en développement et en géolocalisation travaille sans relâche pour améliorer continuellement notre application et fournir des mises à jour régulières afin de répondre aux besoins changeants de nos utilisateurs.</p>
              </ClassicText>
              <ClassicTextTitle>
                <p>Notre Vision</p>
              </ClassicTextTitle>
              <ClassicText>
                <p>Notre vision à long terme est de devenir le leader mondial incontesté de la géolocalisation en intérieur. Nous aspirons à étendre notre portée géographique à travers le monde, en mettant en place notre infrastructure dans diverses infrastructures intérieures pour faciliter la vie des individus et des entreprises. En outre, nous cherchons continuellement à explorer de nouvelles possibilités d'application pour notre technologie au-delà de la navigation en intérieur.</p>
              </ClassicText>
            </div>
          </div>
        </GlassMoContainer>
      </div>
      <div className="bottom-bar-propos">
        <BottomBar SelectedPage="Settings"/>
      </div>
    </div>
  );
};

export default ProposPage;
