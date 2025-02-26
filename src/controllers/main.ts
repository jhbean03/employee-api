import { Request, Response, NextFunction } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { Validate } from '../decorators/validate';
import Joi from 'joi';

const postHealthCheckValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email(),
    description: Joi.string()
});

@Controller()
class MainController {
    @Route('get', '/healthcheck')
    getHealthCheck(req: Request, res: Response, next: NextFunction) {
        console.log('Healthcheck called successfully!');
        res.status(200).json({ app: "running!" });
    }

    @Route('post', '/healthcheck')
    @Validate(postHealthCheckValidation)
    postHealthCheck(req: Request, res: Response, next: NextFunction) {
        console.log('Healthcheck called successfully!');
        res.status(200).json({ ...req.body });
    }
}

export default MainController;
