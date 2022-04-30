import SearchController from "../controllers/search.controller";
import Route from '../models/route.model';
declare class IndexRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Express;
    indexController: SearchController;
    constructor();
    private initializeRoutes;
}
export default IndexRoute;
