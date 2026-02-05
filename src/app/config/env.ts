import dotenv from "dotenv";
dotenv.config();
interface ENVconfig {
  PORT: string;
  NODE_ENV: string;
}

const loadEnvVariable = (): ENVconfig => {
  const requireVariable: string[] = ["PORT", "NODE_ENV"];
  requireVariable.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`missing environment variable ${key}`);
    }
  });

  return {
    PORT: process.env.PORT as string,
    NODE_ENV: process.env.NODE_ENV as string,
  };
};
export const envVars = loadEnvVariable();
