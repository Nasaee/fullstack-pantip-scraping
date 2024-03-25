import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { uploadAnnounceData, uploadRoomData } from './models/scrape/uploadData';
import { mongoConnect } from './utils/mongoConnect';
import announceRouter from './routes/announce.route';
import { pantipRoomScrape } from './models/scrape/scrape';
import roomsDataRouter from './routes/roomsData.route';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*', // development
    // origin: process.env.FRONTEND_URL,// production
  })
);

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use('/api/announce', announceRouter);
app.use('/api/roomsData', roomsDataRouter);

app.use('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

async function startServer() {
  mongoConnect();
  uploadAnnounceData();
  uploadRoomData();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
