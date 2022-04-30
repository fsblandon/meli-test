"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const search_controller_1 = tslib_1.__importDefault(require("../controllers/search.controller"));
const express_1 = tslib_1.__importDefault(require("express"));
class IndexRoute {
    constructor() {
        this.path = '/api/items';
        this.router = (0, express_1.default)();
        this.indexController = new search_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.indexController.searchByQueryParams);
        this.router.get(`${this.path}/:id`, this.indexController.getItemDetail);
    }
}
exports.default = IndexRoute;
//# sourceMappingURL=index.js.map