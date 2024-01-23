import { Router } from "express";
import {reviewHaiku, generateHaiku} from '../controllers/haikuController';

const haikuRouter = Router();

haikuRouter.get('/', generateHaiku);
haikuRouter.post('/review', reviewHaiku);

export default haikuRouter ;