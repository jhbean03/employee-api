import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import 'reflect-metadata';

import { loggingHandler } from './middleware/loggingHandler';
import { corsHandler } from './middleware/corsHandler';
import { routeNotFound } from './middleware/routeNotFound';
import { mongo, SERVER_PORT, SERVER_HOSTNAME } from './config/config';

import MainController from './controllers/main';
import { defineRoutes } from './modules/routes'

export const router = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = async () => {
    console.log('-----------------------------------------------');
    console.log('Initializing API');
    console.log('-----------------------------------------------');

    // Configure express for parsing POST/DELETE requests
    router.use(express.urlencoded({ extended: true}));
    router.use(express.json());

    console.log('-----------------------------------------------');
    console.log('Connect to Mongo');
    console.log('-----------------------------------------------');

    // Attempt to connect to MongoDB
    try {
        const connection = await mongoose.connect(mongo.MONGO_CONNECTION)
        console.log('-----------------------------------------------');
        console.log('Connected to Mongo: ', connection.version);
        console.log('-----------------------------------------------');
    } catch (error) {
        console.log('-----------------------------------------------');
        console.log('Unable to Connect to Mongo');
        console.error(error);
        console.log('-----------------------------------------------');
    }

    console.log('-----------------------------------------------');
    console.log('Logging & Configuration');
    console.log('-----------------------------------------------');

    // Use functions to handle logs and requests
    router.use(loggingHandler);
    router.use(corsHandler);

    console.log('-----------------------------------------------');
    console.log('Define Controller Routing');
    console.log('-----------------------------------------------');

    // Perform a healthcheck of the system to ensure app is running
    defineRoutes([MainController], router);

    console.log('-----------------------------------------------');
    console.log('Define Error Routing');
    console.log('-----------------------------------------------');

    // Use function to handle any errors
    router.use(routeNotFound);

    console.log('-----------------------------------------------');
    console.log('Start Server');
    console.log('-----------------------------------------------');
    
    // Start the server; log hostname and port when server starts
    httpServer = http.createServer(router);
    httpServer.listen(SERVER_PORT, () => {
        console.log('-----------------------------------------------');
        console.log('Server Started: ' + SERVER_HOSTNAME + ':' + SERVER_PORT);
        console.log('-----------------------------------------------');
    });
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main();
