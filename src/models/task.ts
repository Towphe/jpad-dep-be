// import { Prisma, PrismaClient } from "@prisma/client";

import prisma from "../lib/prisma.js";
import {
  Prisma,
  PrismaClient,
  TaskStatus,
} from "../../prisma/prisma/client.js";

export class TaskModel {
  private readonly db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  public async getById(
    taskId: string,
    tx: Prisma.TransactionClient | null = null
  ) {
    const db = tx ?? this.db;

    const task = await db.task.findFirst({
      where: {
        taskId: taskId,
      },
    });

    return task;
  }

  public async getMany(take: number, skip: number, search?: string) {
    const tasks = await this.db.task.findMany({
      where: {
        title: search ? { contains: search } : undefined,
      },
      take,
      skip,
      orderBy: {
        createdAt: "desc",
      },
    });
    return tasks;
  }

  public async create(
    title: string,
    description?: string,
    tx: Prisma.TransactionClient | null = null
  ) {
    const db = tx ?? this.db;

    const task = await db.task.create({
      data: {
        title,
        description,
      },
    });

    return task;
  }

  public async update(
    taskId: string,
    title: string,
    description: string,
    status: TaskStatus,
    tx: Prisma.TransactionClient | null = null
  ) {
    const db = tx ?? this.db;

    const task = await db.task.update({
      where: { taskId: taskId },
      data: {
        title,
        description,
        status,
      },
    });

    return task;
  }

  public async delete(
    taskId: string,
    tx: Prisma.TransactionClient | null = null
  ) {
    const db = tx ?? this.db;

    const task = await db.task.delete({
      where: { taskId: taskId },
    });

    return task;
  }
}

export const taskModel = new TaskModel(prisma);
