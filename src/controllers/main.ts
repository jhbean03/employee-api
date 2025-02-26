import { Request, Response, NextFunction } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';

@Controller()
class MainController {
    @Route('get', '/healthcheck')
    @Route('post', '/healthcheck')
    getHealthCheck(req: Request, res: Response, next: NextFunction) {
        console.log('Healthcheck called successfully!');
        res.status(200).json({ app: "running!", ...req.body });
    }
}

export default MainController;
