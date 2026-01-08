import { TaskStatus } from "../../prisma/prisma/enums.js";

export function validateTaskStatus(status: string): boolean {
  const validStatus = Object.values(TaskStatus);

  return validStatus.includes(status as TaskStatus);
}
