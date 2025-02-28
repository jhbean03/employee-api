import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: '../../../.env'});

export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost'
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5000;

class Api {
    private static axiosInstance: AxiosInstance;

    static init() {
        this.axiosInstance = axios.create({
            baseURL: `http://${SERVER_HOSTNAME}:${SERVER_PORT}`
        });
    }

    static async get(url: string) {
        return Api.axiosInstance.get(url);
    }
}