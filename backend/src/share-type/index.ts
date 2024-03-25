export type AnnounceType = {
  header: string;
  announceContent: {
    _id: string;
    title: string;
    link: string;
    description: string;
  }[];
};

export type RoomDataType = {
  title: string;
  link: string;
  iconUrl: string;
};
