import { useContext, useEffect, useState } from "react";
import { SearchBar } from "../Components/Input/Search/SearchBar";
import { RoomVerticalList } from "../Components/List/RoomVerticalList";
import { RoomHorizontalList } from "../Components/List/RoomHorizontalList";
import { AppContext } from "../Context/AppContext";
import { RoomList } from "../Types/Rooms";

import "./SearchPage.css";

export const SearchPage = () => {
  const { appLoc } = useContext(AppContext);
  const { location } = appLoc;
  const { rooms } = location;

  const [results, setResults] = useState<RoomList>([]);
  const [favorites, setFavorites] = useState<RoomList>([]);

  useEffect(() => {
    const favorites = rooms.filter((room: any) => room.userFavorite);
    setFavorites(favorites);
  }, [rooms]);

  return (
    <div className="search-page">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} type={"back"} />
      </div>
      <div className="result-container">
        {results && results.length > 0 && (
          <RoomVerticalList roomList={results} />
        )}
        {!results ||
          (results.length === 0 && (
            <div className="empty-search">
              <div className="favorites-container">
                <h1>Favoris</h1>
                <div className="favorites-list">
                  <RoomHorizontalList roomList={favorites} />
                </div>
              </div>
              <div className="recent-container">
                <h1>Historique</h1>
                <RoomHorizontalList roomList={rooms} />
              </div>
              <div className="trending-container">
                <h1>Suggestions</h1>
                <div className="trending-list">
                  <RoomVerticalList roomList={rooms} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
