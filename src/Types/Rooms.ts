export type Room = {
  name: string;
  id: number;
  locationId: number;
  tileId: number;
  posX: number;
  posY: number;
  geometry: string;
  userFavorite: boolean;
  imageURL: string;
};

export type RoomList = Array<Room>;
