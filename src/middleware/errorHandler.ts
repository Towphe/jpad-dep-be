import { ZodError } from "zod";
import errors from "../constants/errors.js";
import { AppError } from "../types/error.js";
import { Request, Response, NextFunction } from "express";

function handleError(
  error: unknown,
  req: Request,
  res: Response,
  _: NextFunction
): void {
  let responseCode: number;
  let errorCode: string;
  let message: string;
  let data: unknown | null = null;

  console.log(error);

  if (error instanceof AppError) {
    responseCode = error.responseCode;
    errorCode = error.errorCode;
    message = error.message;
    data = error.data;
  } else if (error instanceof ZodError) {
    const err = errors["0003"];
    responseCode = err.responseCode;
    errorCode = err.errorCode;
    message = "Error parsing Zod schema";
    data = JSON.parse(error.message);
  } else {
    responseCode = errors["9999"].responseCode;
    errorCode = errors["9999"].errorCode;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = errors["9999"].defaultMessage;
    }
  }

  res.status(responseCode).json({
    message: message,
    code: errorCode,
    data: data,
  });
}

export default handleError;
