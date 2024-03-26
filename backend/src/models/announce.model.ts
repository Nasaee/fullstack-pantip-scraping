import mongoose from 'mongoose';
import { AnnounceType } from '../share-type';

const announceSchema = new mongoose.Schema<AnnounceType>({
  header: String,
  announceContent: [
    {
      title: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
});

const Announce = mongoose.model<AnnounceType>('Announce', announceSchema);

export default Announce;
