import { useEffect } from "react";
import { Room } from "../../../Types/Rooms";
import "./RoomImage.css";

export const RoomImage = ({ room, key }: { room: Room; key: number }) => {

  const toggleFavorite = () => {
    room.userFavorite = !room.userFavorite;
  }

  useEffect(() => {}, [room.userFavorite]);

  return (
    <div className="image-container" onClick={() => {alert(`Vous avec cliqué sur ${room.name}`)}}>
      <div className="room-image">
        <img src={room.imageURL} alt={room.name} />
      </div>
      <div className="name-overlay">
        <div className="room-name">{room.name}</div>
        <div className="room-description">{room.name}</div>
      </div>
      <div className="favorite-overlay" onClick={() => {toggleFavorite()}}>
        {room.userFavorite && (
          <svg xmlns="http://www.w3.org/2000/svg" id="favorite-icon-plain">
            <path
              d="M16.5815 2.14453C15.6435 2.16018 14.726 2.44095 13.9215 2.95849C13.1171 3.47604 12.4543 4.21203 12 5.09214C11.5457 4.21203 10.8829 3.47604 10.0785 2.95849C9.27405 2.44095 8.35651 2.16018 7.41852 2.14453C5.92324 2.21419 4.51444 2.9156 3.49991 4.09552C2.48539 5.27544 1.9476 6.83796 2.00403 8.4417C2.00403 14.4932 11.1304 21.4827 11.5185 21.7792L12 22.1445L12.4815 21.7792C12.8696 21.4844 21.996 14.4932 21.996 8.4417C22.0524 6.83796 21.5146 5.27544 20.5001 4.09552C19.4856 2.9156 18.0768 2.21419 16.5815 2.14453Z"
              fill="#1758F1"
            />
          </svg>
        )}
        {!room.userFavorite && (
          <div className="not-favorite-icon">
            <div className="heart-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                id="heart-circle"
              >
                <g filter="url(#filter0_b_1022_282)">
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="white"
                    fill-opacity="0.3"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="11.75"
                    stroke="white"
                    stroke-opacity="0.3"
                    stroke-width="0.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_1022_282"
                    x="-30"
                    y="-30"
                    width="84"
                    height="84"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1022_282"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1022_282"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="heart-icon">
              <svg id="heart-icon">
                <path
                  d="M6.372 10.626C6.168 10.698 5.832 10.698 5.628 10.626C3.888 10.032 0 7.55401 0 3.354C0 1.5 1.494 0 3.336 0C4.428 0 5.394 0.528 6 1.344C6.606 0.528 7.578 0 8.664 0C10.506 0 12 1.5 12 3.354C12 7.55401 8.112 10.032 6.372 10.626Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
