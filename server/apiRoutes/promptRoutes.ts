import { Router } from "express";
import { getAllPrompts, getPrompt } from "../controllers/promptController";

const promptRouter = Router();

promptRouter.get('/', getAllPrompts);
promptRouter.get('/:id', getPrompt);


export default promptRouter ;