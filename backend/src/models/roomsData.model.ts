import mongoose from 'mongoose';
import { RoomDataType } from '../share-type';

const roomDataSchema = new mongoose.Schema<RoomDataType>({
  title: String,
  link: String,
  iconUrl: String,
});

const RoomData = mongoose.model<RoomDataType>('RoomData', roomDataSchema);
export default RoomData;
