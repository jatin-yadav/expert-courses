import { Request, Response, Router } from "express";
import { getUserById, createUser } from "../controllers/users.controllers";

const usersRouter = Router();

usersRouter.get("/", (req: Request, res: Response) => {
  res.json("users list");
});

usersRouter.get("/:id", getUserById);
usersRouter.post("/create", createUser);

export { usersRouter };
