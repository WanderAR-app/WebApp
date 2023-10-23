import { useContext, useEffect, useState } from "react";
import './HomePage.css';

import CarreWhiteContainer from '../Components/Container/CarreWhiteContainer';
import { SearchBar } from "../Components/Input/Search/SearchBar";
import { RoomList } from "../Types/Rooms";
import BottomBar from '../Components/Button/BottomBar';

export const HomePage = () => {

  const [results, setResults] = useState<RoomList>([]);

  return (
    <div className="home-page">
      <div className="container" style={{ overflow: 'hidden' }}>
        <div className="button-container-home">
          <CarreWhiteContainer>
            <div className="glass-container-home">
              <div className="search-bar-container">
                <SearchBar setResults={setResults} type={"back"} />
              </div>
            </div>
          </CarreWhiteContainer>
        </div>
        <div className="bottom-bar-navigation">
          <BottomBar SelectedPage="Home"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;