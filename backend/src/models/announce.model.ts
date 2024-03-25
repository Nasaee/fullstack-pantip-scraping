import mongoose from 'mongoose';
import { AnnounceType } from '../share-type';

const announceSchema = new mongoose.Schema<AnnounceType>({
  header: String,
  announceContent: [
    {
      title: String,
      link: String,
      description: String,
    },
  ],
});

const Announce = mongoose.model<AnnounceType>('Announce', announceSchema);

export default Announce;
