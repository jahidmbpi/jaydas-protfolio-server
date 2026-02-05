import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
const app = express();
//  cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//  router

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to  protfolio",
  });
});

export default app;
