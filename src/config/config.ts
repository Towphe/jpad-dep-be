import errors from "../constants/errors.js";
import { AppError } from "../types/error.js";
import dotenv from "dotenv";

dotenv.config();

function checkEnvVarExistence(envVar: string | undefined): string {
  if (!envVar) {
    const { responseCode, errorCode, defaultMessage } = errors["9999"];
    throw new AppError(responseCode, errorCode, defaultMessage);
  }

  return envVar;
}

interface Config {
  port: number;
  nodeEnv: string;
  dbUrl: string;
  frontendUrl: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3001,
  nodeEnv: process.env.NODE_ENV || "dev",
  dbUrl: checkEnvVarExistence(process.env.DATABASE_URL),
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
};

export default config;
