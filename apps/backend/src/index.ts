import express, { Express, Request, Response } from "express";
import { onRequest } from "firebase-functions/https";
import dotenv from "dotenv";
import { errorHandler } from "@middlewares/errorHandler";
import routes from "@routes/routes";

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

// Routes
app.use("/", routes);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

exports.app = onRequest(app);
