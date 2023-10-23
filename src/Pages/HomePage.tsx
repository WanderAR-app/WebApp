import { useContext, useEffect, useState } from "react";
import "./HomePage.css";

import WhiteContainer from "../Components/Container/WhiteContainer";
import { SearchBar } from "../Components/Input/Search/SearchBar";
import { RoomList } from "../Types/Rooms";
import BottomBar from "../Components/Button/BottomBar";
import { RoomVerticalList } from "../Components/List/RoomVerticalList";
import { RoomHorizontalList } from "../Components/List/RoomHorizontalList";
import { AppContext } from "../Context/AppContext";
import TitleText from "../Components/Text/TitleText";
import { useNavigate } from "react-router-dom";
import GlassMoContainer from "../Components/Container/GlassMoContainer";
import DetailText from "../Components/Text/DetailText";

import fovorisImage from "../assets/favoris.svg";
import historiqueImage from "../assets/historique.svg";

export const HomePage = () => {
  const { appLoc } = useContext(AppContext);
  const { location } = appLoc;
  const { rooms } = location;

  const [results, setResults] = useState<RoomList>([]);
  const [favorites, setFavorites] = useState<RoomList>([]);

  const navigate = useNavigate();
  const handleSearchBarClick = () => {
    navigate("/search");
  };

  useEffect(() => {
    const favorites = rooms.filter((room: any) => room.userFavorite);
    setFavorites(favorites);
  }, [rooms]);

  return (
    <div className="home-page">
      <div className="container">
        <div className="title-container-home">
          <GlassMoContainer>
            <DetailText>Bienvenue à</DetailText>
            <TitleText>Epitech</TitleText>
          </GlassMoContainer>
        </div>
        <div className="button-container-home">
          <WhiteContainer>
            <div className="glass-container-home">
              <div className="search-bar-container">
                <button
                  className="hidden-button"
                  onClick={handleSearchBarClick}
                >
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
                      <div className="title-home">
                        <TitleText>Favoris</TitleText>
                        <img src={fovorisImage} alt="Favoris" />
                      </div>
                      <div className="favorites-list">
                        <RoomHorizontalList roomList={favorites} />
                      </div>
                      <div className="title-home">
                        <TitleText>Historique</TitleText>
                        <img src={historiqueImage} alt="Historique" />
                      </div>
                      <RoomHorizontalList roomList={rooms} />
                    </div>
                  ))}
              </div>
            </div>
          </WhiteContainer>
        </div>
        <div className="bottom-bar-home">
          <BottomBar SelectedPage="Home" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
