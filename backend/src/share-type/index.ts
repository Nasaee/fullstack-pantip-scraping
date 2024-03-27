export type AnnounceType = {
  _id: string;
  header: string;
  announceContent: Array<{
    _id: string;
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
    _id: string;
    tagName: string;
    tagLink: string;
  }>;
  author: {
    authorName: string;
    authorProfileUrl: string;
  };
  commentCount: number;
};

export type ContentsResponseType = {
  data: ContentsType[];
  totalPages: number;
  currentPage: number;
  nextPage: number | null;
};
