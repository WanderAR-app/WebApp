// import React from 'react';
// import './CguPage.css';

// import BlueGlassMoButton from '../Components/Button/BlueGlassMoButton';
// import WhiteGlassMoButton from '../Components/Button/WhiteGlassMoButton';

// const backgroundImage = '../../assets/back.svg'
// const logoImage = '../../assets/WanderAR_Cgu.svg';

// const CguPage: React.FC = () => {
//   const handleRefuse = () => {
//     window.close();
//   };

//   const handleAccept = () => {
//     window.location.href = '/';
//   };

//   return (
//     // <div className="background-image">
//     <img src={backgroundImage} alt="Background" className="Background" />
//       <div className="container">
//         <img src={logoImage} alt="Logo" className="logo" />
//         <h1>Conditions générales d'utilisation</h1>
//         <p>
//           Wander AR est une application de guidage en intérieur disponible dans les bâtiments utilisant nos services.
//         </p>
//         <p>
//           Les conditions générales d’utilisation peuvent être changées à tout moment. Pour les consulter ou être notifié de tout changement, allez à Paramètres/Politique de confidentialité.
//         </p>
//         <div className="button-container">
//           <BlueGlassMoButton OnClick={handleAccept}>Accepter</BlueGlassMoButton>
//           <WhiteGlassMoButton OnClick={handleRefuse}>Refuser</WhiteGlassMoButton>
//         </div>
//       </div>
    
//     // </div>
//   );
// };

// export default CguPage;


import React from 'react';
import './CguPage.css';

import BlueGlassMoButton from '../Components/Button/BlueGlassMoButton';
import WhiteGlassMoButton from '../Components/Button/WhiteGlassMoButton';

const backgroundImage = '../../assets/back.svg';
const logoImage = '../../assets/WanderAR_Cgu.svg';

const CguPage: React.FC = () => {
  const handleRefuse = () => {
    window.close();
  };

  const handleAccept = () => {
    window.location.href = '/';
  };

  return (
    <div className="background-image">
      <img src={backgroundImage} alt="Background" className="Background" />
      <div className="container">
        <img src={logoImage} alt="Logo" className="logo" />
        <h1>Conditions générales d'utilisation</h1>
        <p>
          Wander AR est une application de guidage en intérieur disponible dans les bâtiments utilisant nos services.
        </p>
        <p>
          Les conditions générales d’utilisation peuvent être changées à tout moment. Pour les consulter ou être notifié de tout changement, allez à Paramètres/Politique de confidentialité.
        </p>
        <div className="button-container">
          <BlueGlassMoButton OnClick={handleAccept}>Accepter</BlueGlassMoButton>
          <WhiteGlassMoButton OnClick={handleRefuse}>Refuser</WhiteGlassMoButton>
        </div>
      </div>
    </div>
  );
};

export default CguPage;