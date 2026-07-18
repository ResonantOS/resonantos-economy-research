import { loadConfig } from "../config/index.js";
import { createHealthServer, startHealthServer } from "./index.js";

const config = loadConfig(process.env);
const server = createHealthServer(config);

await startHealthServer(server, config);

if (config.logLevel === "info") {
  process.stdout.write("time-capsule synthetic health service ready\n");
}

for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.once(signal, () => {
    server.close(() => process.exit(0));
  });
}
