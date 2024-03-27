import express, { Request, Response } from 'express';
import Contents from '../models/contents.model';
import { ContentsResponseType } from '../share-type';

const contentsRouter = express.Router();

contentsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const pageSize = 10;

    const currentPage = parseInt(req.query.page?.toString() || '1');
    const skip = (currentPage - 1) * pageSize;

    const contents = await Contents.find({}, { __v: 0 })
      .skip(skip)
      .limit(pageSize);

    const totalContents = await Contents.countDocuments();
    const totalPages = Math.ceil(totalContents / pageSize);

    if (currentPage > totalPages) {
      return res.sendStatus(404).json({ message: 'Page Not Found' });
    }

    const respose: ContentsResponseType = {
      data: contents,
      totalPages,
      currentPage,
      nextPage: currentPage < totalPages ? currentPage + 1 : null,
    };

    res.status(200).json(respose);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ message: 'Internal Server Error' });
  }
});

export default contentsRouter;
