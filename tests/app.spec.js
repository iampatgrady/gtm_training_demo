const request = require('supertest');
const app = require('../app');

beforeAll(() => {
    process.env.NODE_ENV = 'test';
});

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  });
});

describe('Testing Web App: /', () => {
  it('should respond 200 status to GET request for /', async done => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    done();
  });

  it('should respond 404 status to POST request for / with data', async done => {
    const response = await request(app)
      .post('/')
      .set('origin', 'https://www.adswerve.com')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify([{name: 'testing', value: '12'}]));
    expect(response.statusCode).toBe(404);
    done();
  });
});

describe('Testing Web App: /faq', () => {
  it('should respond 200 status to GET request for /faq', async done => {
    const response = await request(app).get('/faq');
    expect(response.statusCode).toBe(200);
    done();
  });
});
