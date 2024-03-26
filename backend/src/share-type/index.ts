export type AnnounceType = {
  header: string;
  announceContent: Array<{
    title: string;
    link: string;
    description: string;
  }>;
};

export type RoomDataType = {
  _id: string;
  title: string;
  link: string;
  iconUrl: string;
};

export type ContentsType = {
  _id: string;
  header: string;
  contentImageUrl: string;
  link: string;
  tags: Array<{
    tagName: string;
    tagLink: string;
  }>;
  author: {
    authorName: string;
    authorProfileUrl: string;
  };
};
