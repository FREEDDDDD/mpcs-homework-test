const request = require('supertest');
const app = require('./index');

describe('API Endpoints', () => {
  test('GET / should return status OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('OK');
  });

  test('GET /greet/:name should return greeting', async () => {
    const res = await request(app).get('/greet/Gemini');
    expect(res.body.message).toBe('Hello, Gemini!');
  });

  test('GET /add should sum two numbers', async () => {
    const res = await request(app).get('/add?a=5&b=10');
    expect(res.body.result).toBe(15);
  });

  test('GET /add should return 400 for invalid input', async () => {
    const res = await request(app).get('/add?a=foo&b=10');
    expect(res.statusCode).toEqual(400);
  });

  test('Environment check', () => {
    expect(process.env.NODE_ENV).toBe('test');
  });
});
