import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';

const [scanResult, setScanResult] = useState<string>("");

const Scanner = () => {
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

export default Scanner;