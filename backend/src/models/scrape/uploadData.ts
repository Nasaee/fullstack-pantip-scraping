import fs from 'fs';
import path from 'path';
import Announce from '../announce.model';
import { AnnounceType } from '../../share-type';

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
