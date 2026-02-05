import { Server } from "http";
import app from "./app.js";
import { envVars } from "./app/config/env.js";

let server: Server;

const startServer = () => {
  try {
    if (envVars.NODE_ENV !== "production") {
      app.listen(envVars.PORT, () => {
        console.log(`🚀 Server running at http://localhost:${envVars.PORT}`);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await startServer();
})();