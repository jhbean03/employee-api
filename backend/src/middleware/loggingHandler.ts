import { Request, Response, NextFunction } from 'express';

export function loggingHandler(req: Request, res: Response, next: NextFunction) {
    // Log information of the incoming request
    console.log(`Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`)

    // Once the request has finished, log status information
    res.on('finish', () => {
        console.log(`Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
    });

    next();
}