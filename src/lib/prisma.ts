import config from "../config/config.js";
import { PrismaClient } from "../../prisma/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
  // allow attaching prisma to the global object during development
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const connectionString = `${config.dbUrl}`;

const adapter = new PrismaPg({ connectionString });

const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
