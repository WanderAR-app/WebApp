import { Room, RoomList } from "../../Types/Rooms";
import { RoomImage } from "./ListElements/RoomImage";

import "./RoomHorizontalList.css";

export const RoomHorizontalList = ({ roomList }: { roomList: RoomList }) => {
  return (
    <div className="room-image-list">
      {roomList.map((room: Room, id: any) => {
        return <RoomImage key={id} room={room} />;
      })}
    </div>
  );
};
