const request = require('supertest');
const app = require('../../app');

describe('Employee API Tests', () => {
  it('should fetch employee hierarchy', async () => {
    const res = await request(app).get(
      '/api/v1/employee/get-employee-hierarchy',
    );
    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeInstanceOf(Array);
  });
});
