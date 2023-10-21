import { Room } from "../../../Types/Rooms";
import "./RoomLine.css";

export const RoomLine = (room: Room) => {
  return (
    <div
      className="room-result"
      onClick={() => {
        alert(`Vous avec cliqué sur ${room.name}`);
      }}
    >
      {room.name}
      <div className="right-arrow-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="18"
          viewBox="0 0 9 18"
          fill="none"
        >
          <path
            d="M1 16.84L7.52 10.32C8.29 9.55 8.29 8.29 7.52 7.52L1 1"
            stroke="#6E7176"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
