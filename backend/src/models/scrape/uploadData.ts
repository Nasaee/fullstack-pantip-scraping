import fs from 'fs';
import path from 'path';
import Announce from '../announce.model';
import { AnnounceType, RoomDataType } from '../../share-type';
import RoomData from '../roomsData.model';

export async function uploadAnnounceData() {
  fs.readFile(
    path.join(__dirname, './store/announce.json'),
    'utf8',
    async (err, data) => {
      if (err) {
        console.error(err);
        throw err;
      }

      const uploadData: AnnounceType = JSON.parse(data);

      try {
        await Announce.updateOne({ header: 'Announce' }, uploadData, {
          upsert: true,
        });
        console.log('Announce data uploaded successfully');
      } catch (error) {
        console.error(error);
      }
    }
  );
}

export async function uploadRoomData() {
  fs.readFile(
    path.join(__dirname, './store/roomData.json'),
    'utf8',
    async (err, data) => {
      if (err) {
        console.error(err);
        throw err;
      }

      const uploadData: RoomDataType[] = JSON.parse(data);

      try {
        await RoomData.insertMany(uploadData);
        console.log('Room data uploaded successfully');
      } catch (error) {
        console.error(error);
      }
    }
  );
}
