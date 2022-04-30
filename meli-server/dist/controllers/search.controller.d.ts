import { NextFunction, Request, Response } from 'express';
declare class SearchController {
    searchByQueryParams(req: Request, res: Response, next: NextFunction): Promise<any>;
    getItemDetail(req: Request, res: Response, next: NextFunction): Promise<any>;
}
export default SearchController;
