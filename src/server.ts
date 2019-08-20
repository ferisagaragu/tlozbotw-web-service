import { server, PORT } from "./config/server.config";
import { init } from "./services/restful";

try {
  init();
} catch (error) {
  console.error(error);
}

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);