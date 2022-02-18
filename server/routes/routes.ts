import { Router, Request, Response } from "express";
import {
  deletePersonById,
  getPeople,
  addNewPerson,
  updatePersonById,
} from "../controllers/people";

const peopleRouter = Router();

peopleRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

peopleRouter.get("/people", getPeople);

peopleRouter.delete("/:pid", deletePersonById);

peopleRouter.patch("/:pid", updatePersonById);

peopleRouter.post("/", addNewPerson);

export default peopleRouter;
