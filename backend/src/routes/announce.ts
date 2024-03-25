import express, { Request, Response } from 'express';
import Announce from '../models/announce.model';

const announceRouter = express.Router();

announceRouter.get('/', async (req: Request, res: Response) => {
  try {
    const announceData = await Announce.findOne({ header: 'Announce' });
    return res.status(200).json(announceData);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ message: 'Internal Server Error' });
  }
});

export default announceRouter;
