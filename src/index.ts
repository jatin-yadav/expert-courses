import express, { json, Request, Response } from "express";
import { usersRouter } from "./routes/users.route";
const app = express();
app.use(json());

app.use("/api/v1/users", usersRouter);

const PORT = 8080;

app.get("/", (req: Request, res: Response) => {
  res.json("Working");
});

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}/`);
});
