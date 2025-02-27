import { Request, Response, NextFunction } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import { MongoGetAll } from '../decorators/mongoose/getAll';
import { MongoGet } from '../decorators/mongoose/get';
import { MongoCreate } from '../decorators/mongoose/create';
import { MongoQuery } from '../decorators/mongoose/query';
import { MongoUpdate } from '../decorators/mongoose/update';
import { MongoDelete } from '../decorators/mongoose/delete';
import { Employee } from '../models/employee';

@Controller('/employees')
class EmployeesController {
    @Route('get', '/get/all')
    @MongoGetAll(Employee)
    getAll(req: Request, res: Response, next: NextFunction) {
        res.status(200).json(req.mongoGetAll);
    }

    @Route('get', '/get/:id')
    @MongoGet(Employee)
    get(req: Request, res: Response, next: NextFunction) {
        res.status(200).json(req.mongoGet);
    }

    @Route('post', '/create')
    @MongoCreate(Employee)
    create(req: Request, res: Response, next: NextFunction) {
        res.status(201).json(req.mongoCreate);
    }

    @Route('post', '/query')
    @MongoQuery(Employee)
    query(req: Request, res: Response, next: NextFunction) {
        res.status(200).json(req.mongoQuery);
    }

    @Route('patch', '/update/:id')
    @MongoUpdate(Employee)
    update(req: Request, res: Response, next: NextFunction) {
        res.status(201).json(req.mongoUpdate);
    }

    @Route('delete', '/delete/:id')
    @MongoDelete(Employee)
    delete(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({ message: 'deleted' });
    }
}

export default EmployeesController;
