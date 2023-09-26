import { ChangeEvent, useState } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

import "./App.css";
import WhiteButton from "./Components/Button/WhiteButton";
import BlueButton from "./Components/Button/BlueButton";
import IconButton from "./Components/Button/IconButton";
import WhiteButtonText from "./Components/Text/WhiteButtonText";
import BlueButtonText from "./Components/Text/BlueButtonText";
import TitleText from "./Components/Text/TitleText";
import SubtitleText from "./Components/Text/SubtitleText";
import PlaceholderText from "./Components/Text/PlaceholderText";
import InputText from "./Components/Input/InputText";
import DualContainer from "./Components/Container/DualContainer";
import DualContainerText from "./Components/Text/DualContainerText";
import SwitchOnOff from "./Components/Switch/SwitchOnOff";
import SwitchText from "./Components/Switch/SwitchText";
import DualButton from "./Components/Button/DualButton";
import RoundButton from "./Components/Button/RoundButton";
import GlassMoContainer from "./Components/Container/GlassMoContainer";
import ClassicText from "./Components/Text/ClassicText";
import BlueGlassMoButton from "./Components/Button/BlueGlassMoButton";
import WhiteGlassMoButton from "./Components/Button/WhiteGlassMoButton";
import BlueGlassMoText from "./Components/Text/BlueGlassMoText";
import WhiteGlassMoText from "./Components/Text/WhiteGlassMoText";

function App() {
  const [scanResult, setScanResult] = useState<string>("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 500,
        height: 500
      },
      fps: 10
    },
    false);
  
    scanner.render(success, error);
  
    function success(result: string) {
      scanner.clear();
      setScanResult(result);
    }
  
    function error(error: any) {
      console.warn(error);
    }
  }, []);

  return (
    <div>
      { scanResult
        ? <div>Result: <a href={scanResult}>{scanResult}</a></div>
        : <div id="reader"></div>
      }
    </div>
  );
}

export default App;
