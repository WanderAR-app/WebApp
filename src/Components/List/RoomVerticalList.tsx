import "./RoomVerticalList.css";
import { RoomLine } from "./ListElements/RoomLine";
import { RoomList } from "../../Types/Rooms";

export const RoomVerticalList = ({ roomList }: { roomList: RoomList }) => {
  return (
    <div className="room-list">
      {roomList.map((room, id) => {
        return <RoomLine key={id} {...room} />;
      })}
    </div>
  );
};
