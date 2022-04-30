"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
process.env.NODE_CONFIG_DIR = __dirname + '/configs';
require("dotenv/config");
const index_1 = tslib_1.__importDefault(require("./index"));
const index_2 = tslib_1.__importDefault(require("./routes/index"));
const app = new index_1.default([new index_2.default()]);
app.listen();
//# sourceMappingURL=server.js.map