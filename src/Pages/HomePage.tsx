import { useContext, useEffect, useState } from "react";
import './HomePage.css';

import WhiteContainer from '../Components/Container/WhiteContainer';
import { SearchBar } from "../Components/Input/Search/SearchBar";
import { RoomList } from "../Types/Rooms";
import BottomBar from '../Components/Button/BottomBar';
import { RoomVerticalList } from "../Components/List/RoomVerticalList";
import { RoomHorizontalList } from "../Components/List/RoomHorizontalList";
import { AppContext } from "../Context/AppContext";
import TitleText from '../Components/Text/TitleText';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {

  const { appLoc } = useContext(AppContext);
  const { location } = appLoc;
  const { rooms } = location;

  const [results, setResults] = useState<RoomList>([]);
  const [favorites, setFavorites] = useState<RoomList>([]);

  const navigate = useNavigate();
  const handleSearchBarClick = () => {
    navigate('/search'); // Redirige vers la page searchPage
  };

  useEffect(() => {
    const favorites = rooms.filter((room: any) => room.userFavorite);
    setFavorites(favorites);
  }, [rooms]);

  return (
    <div className="home-page">
      <div className="container" style={{ overflow: 'hidden' }}>
        <div className="button-container-home">
          <WhiteContainer>
            <div className="glass-container-home">
              <div className="search-bar-container">
                <button className="hidden-button" onClick={handleSearchBarClick}>
                  <SearchBar setResults={setResults} type={"back"} />
                </button>
              </div>
              <div className="result-container">
                {results && results.length > 0 && (
                  <RoomVerticalList roomList={results} />
                )}
                {!results ||
                  (results.length === 0 && (
                    <div className="empty-search">
                      <div className="favorites-container">
                        <TitleText>Favoris</TitleText>
                        <div className="favorites-list">
                          <RoomHorizontalList roomList={favorites} />
                        </div>
                      </div>
                      <div className="recent-container">
                        <TitleText>Historique</TitleText>
                        <RoomHorizontalList roomList={rooms} />
                      </div>
                      {/* <div className="trending-container">
                        <h1>Suggestions</h1>
                        <div className="trending-list">
                          <RoomVerticalList roomList={rooms} />
                        </div>
                      </div> */}
                    </div>
                  ))}
              </div>
            </div>
          </WhiteContainer>
        </div>
        <div className="bottom-bar-navigation">
          <BottomBar SelectedPage="Home"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;