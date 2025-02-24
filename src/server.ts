import http from 'http'
import express from 'express'
import './config/logging';

export const router = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
    logging.info('-----------------------------------------------');
    logging.info('Initializing API');
    logging.info('-----------------------------------------------');
}