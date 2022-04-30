import SearchController from "../controllers/search.controller";
import Router from "express";
import Route from '../models/route.model';

class IndexRoute implements Route {
    public path = '/api/items';
    public router = Router();
    public indexController = new SearchController();

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.get(`${this.path}`, this.indexController.searchByQueryParams);
        this.router.get(`${this.path}/:id`, this.indexController.getItemDetail);
    }
}

export default IndexRoute;