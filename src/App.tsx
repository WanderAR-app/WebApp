import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

import { AppRouter } from "./Router/AppRouter";
import { AppContextIF, Location } from "./Interfaces/AppContext.interface";
import { AppContext } from "./Context/AppContext";
import { RoomList } from "./Types/Rooms";

function App() {
  const [lang, setLang] = useState({
    current: "fr-FR",
    default: "fr-FR",
  });

  const [location, setLocation] = useState<Location>({
    rooms: [],
    name: "",
  });

  const appDefaultContext: AppContextIF = {
    appLang: { lang, setLang },
    appLoc: { location, setLocation },
  };

  useEffect(() => {
    // create random rooms
    const rooms: RoomList = [];
    for (let i = 0; i < 10; i++) {
      rooms.push({
        name: `Room ${i}`,
        id: i,
        locationId: 1,
        tileId: 1,
        posX: 0,
        posY: 0,
        geometry: "",
        userFavorite: i % 2 === 0,
        imageURL: `https://picsum.photos/1600/1200?random=${i}`,
      });
    }
    setLocation({
      rooms,
      name: "test",
    });
  }, []);

  return (
    <AppContext.Provider value={appDefaultContext}>
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
