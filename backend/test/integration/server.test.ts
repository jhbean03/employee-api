import request from 'supertest';
import { router, Shutdown } from '../../src/server';

// Integration testing for the API server
describe('Application', () => {
    afterAll((done) => {
        Shutdown(done);
    });
    
    it('starts and has the proper test environment', async () => {
        expect(process.env.NODE_ENV).toBe('test');
        expect(router).toBeDefined();
    }, 10000);

    it('returns all options allowed to be called by users (HTTPS methods)', async () => {
        const response = await request(router).options('/');
        expect(response.status).toBe(200);
        expect(response.headers['access-control-allow-methods']).toBe('PUT, POST, PATCH, DELETE, GET')
    });
});