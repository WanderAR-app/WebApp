import { useContext, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.css";
import { AppContext } from "../../../Context/AppContext";
import { RoomList } from "../../../Types/Rooms";

export const SearchBar = ({
  setResults,
  type,
}: {
  setResults: React.Dispatch<React.SetStateAction<RoomList>>;
  type: any;
}) => {
  const { appLoc } = useContext(AppContext);
  const { location } = appLoc;
  const { rooms } = location;

  const [input, setInput] = useState("");
  const icon =
    type === "search" ? (
      <BsSearch id="left-icon" />
    ) : (
      <AiOutlineLeft id="left-icon " onClick={() => void 0} />
    );

  const fetchData = (value: any) => {
    const results: RoomList = rooms.filter((room: any) => {
      return (
        value &&
        room &&
        room.name &&
        room.name.toLowerCase().includes(value.toLowerCase())
      );
    });

    setResults(results);
  };

  const handleChange = (value: any) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      {icon}
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
