"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = require("./config/server.config");
const restful_1 = require("./services/restful");
try {
    restful_1.init();
}
catch (error) {
    console.error(error);
}
server_config_1.server.listen(server_config_1.PORT, () => console.log(`Server is running http://localhost:${server_config_1.PORT}...`));
//# sourceMappingURL=server.js.map