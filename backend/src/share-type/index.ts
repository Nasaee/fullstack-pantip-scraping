export type AnnounceType = {
  header: string;
  announceContent: {
    title: string;
    link: string;
    description: string;
  }[];
};

export type RoomDataType = {
  _id: string;
  title: string;
  link: string;
  iconUrl: string;
};
