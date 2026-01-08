import { Router } from "express";
import { taskController } from "../controllers/task.js";

const taskRouter = Router();

taskRouter.get("/", taskController.getTasks);
taskRouter.post("/", taskController.createTask);
taskRouter.get("/:id", taskController.getTaskById);
taskRouter.put("/:id", taskController.updateTask);
taskRouter.delete("/:id", taskController.deleteTask);

export default taskRouter;
