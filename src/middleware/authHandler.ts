import errors from "../constants/errors.js";
import { AppError } from "../types/error.js";
import { NextFunction, Request, Response } from "express";

function checkAuth(req: Request, res: Response, next: NextFunction) {
  const code = req.query.code;

  if (!code) {
    const { responseCode, errorCode, defaultMessage } = errors["0001"];
    throw new AppError(responseCode, errorCode, defaultMessage);
  }

  if (code !== "pioneerdevai") {
    const { responseCode, errorCode, defaultMessage } = errors["0002"];
    throw new AppError(responseCode, errorCode, defaultMessage);
  }

  next();
}

export default checkAuth;
