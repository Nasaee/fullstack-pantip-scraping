import express, { Request, Response } from 'express';
import RoomData from '../models/roomsData.model';

const roomsDataRouter = express.Router();

roomsDataRouter.get('/', async (req: Request, res: Response) => {
  try {
    const roomsData = await RoomData.find({}, { __v: 0 });
    return res.status(200).json(roomsData);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ message: 'Internal Server Error' });
  }
});

export default roomsDataRouter;
