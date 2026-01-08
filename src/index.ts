import express, { Request, Response } from "express";
import config from "./config/config.js";
import handleError from "./middleware/errorHandler.js";
import taskRouter from "./routes/task.js";
import cors from "cors";
import { corsOptions } from "./lib/cors.js";

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.get("/health", (_: Request, res: Response) => {
  res.json({
    status: "up",
  });
});

app.use("/api/task", taskRouter);

app.use(handleError);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

export default app;
