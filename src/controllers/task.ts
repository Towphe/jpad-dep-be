import { taskService, TaskService } from "../services/task.js";
import { Request, Response } from "express";

export class TaskController {
  private readonly taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  public getTasks = async (req: Request, res: Response) => {
    const apge = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string | undefined;

    const tasks = await this.taskService.getMany(apge, limit, search);

    res.status(200).json({ data: tasks });
  };

  public getTaskById = async (req: Request, res: Response) => {
    const { taskId } = req.params;

    const task = await this.taskService.getById(taskId);

    res.status(200).json({ data: task });
  };

  public createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;

    const task = await this.taskService.create(title, description);

    res.status(201).json({ data: task });
  };

  public updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const task = await this.taskService.update(id, title, description, status);

    res.status(200).json({ data: task });
  };

  public deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.taskService.delete(id);

    res.status(204).send();
  };
}

export const taskController = new TaskController(taskService);
