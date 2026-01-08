import errors from "../constants/errors.js";
import { taskModel, TaskModel } from "../models/task.js";
import { AppError } from "../types/error.js";
import { validateTaskStatus } from "../util/taskStatusValidator.js";
import { TaskStatus } from "../../prisma/prisma/enums.js";
import { PrismaClient } from "../../prisma/prisma/client.js";
import { prisma } from "../lib/prisma.js";

export class TaskService {
  private readonly taskModel: TaskModel;
  private readonly db: PrismaClient;

  constructor(taskModel: TaskModel, db: PrismaClient) {
    this.taskModel = taskModel;
    this.db = db;
  }

  async getMany(page: number, limit: number, search?: string) {
    const tasks = await this.taskModel.getMany(
      limit,
      (page - 1) * limit,
      search
    );

    return tasks;
  }

  async getById(taskId: string) {
    const task = await this.taskModel.getById(taskId);

    return task;
  }

  async create(title: string, description?: string) {
    const task = await this.taskModel.create(title, description);

    return task;
  }

  async update(
    taskId: string,
    title: string,
    description: string,
    status: string
  ) {
    const task = await this.db.$transaction(async (tx) => {
      const task = await this.taskModel.getById(taskId, tx);

      if (!task) {
        const error = errors["0004"];

        throw new AppError(
          error.responseCode,
          error.errorCode,
          `Task with ID ${taskId} not found`
        );
      }

      if (status && !validateTaskStatus(status)) {
        const error = errors["0003"];

        throw new AppError(
          error.responseCode,
          error.errorCode,
          `Invalid task status: ${status}`
        );
      }

      const updatedTask = await this.taskModel.update(
        taskId,
        title,
        description,
        status as TaskStatus,
        tx
      );

      return updatedTask;
    });

    return task;
  }

  async delete(taskId: string) {
    const task = await this.db.$transaction(async (tx) => {
      const task = await this.taskModel.getById(taskId, tx);

      if (!task) {
        const error = errors["0004"];

        throw new AppError(
          error.responseCode,
          error.errorCode,
          `Task with ID ${taskId} not found`
        );
      }

      const deletedTask = await this.taskModel.delete(taskId, tx);

      return deletedTask;
    });

    return task;
  }
}

export const taskService = new TaskService(taskModel, prisma);
