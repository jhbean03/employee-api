import http from 'http'
import express from 'express'

export const router = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
    console.log('-----------------------------------------------');
    console.log('Initializing API');
    console.log('-----------------------------------------------');

    // Configure express for parsing POST/DELETE requests
    router.use(express.urlencoded({ extended: true}));
    router.use(express.json());

    console.log('-----------------------------------------------');
    console.log('Logging & Configuration');
    console.log('-----------------------------------------------');
}