import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";

export const getUserById = (req: Request, res: Response) => {
  res.json({ name: "Jatin" });
};

export const createUser = (
  req: Request<{}, {}, CreateUserDto>,
  res: Response
) => {
  console.log(req.body.username);

  res.json({ name: req.body.username });
};
