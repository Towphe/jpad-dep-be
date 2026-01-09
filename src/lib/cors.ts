import config from "../config/config.js";
import { CorsOptions } from "cors";

const allowedOrigins = [config.frontendUrl];

export const corsOptions: CorsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};
