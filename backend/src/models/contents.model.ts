import mongoose from 'mongoose';
import { ContentsType } from '../share-type';

const contentsSchema = new mongoose.Schema<ContentsType>({
  header: {
    type: String,
    required: true,
  },
  contentImageUrl: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  tags: {
    type: [
      {
        tagName: {
          type: String,
          required: true,
        },
        tagLink: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  author: {
    authorName: {
      type: String,
      required: true,
    },
    authorProfileUrl: {
      type: String,
      required: true,
    },
  },
  commentCount: {
    type: Number,
  },
});

const Contents = mongoose.model<ContentsType>('Contents', contentsSchema);

export default Contents;
