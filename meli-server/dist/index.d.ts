import express from 'express';
import Route from './models/route.model';
declare class App {
    app: express.Application;
    port: string | number;
    env: string;
    constructor(routes: Route[]);
    listen(): void;
    getServer(): express.Application;
    private initializeMiddlewares;
    private initializeRoutes;
    private initializeErrorHandling;
}
export default App;
