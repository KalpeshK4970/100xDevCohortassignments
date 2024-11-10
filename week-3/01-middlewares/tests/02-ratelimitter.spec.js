const app = require("../02-ratelimitter");
const request = require('supertest');

describe('GET /user', function () {
  const userId = 'testId';

  it('One request responds back correctly', async function() {
    const response = await request(app)
      .get('/user')
      .set('user-id', userId);
    expect(response.status).toBe(200);
  });

  it('5 or more requests return back a 404', async function() {
    // Fire 5 requests in quick succession
    for (let i = 0; i < 5; i++) {
      await request(app).get('/user').set('user-id', userId);
    }
    // The 6th request should be blocked
    const response = await request(app)
      .get('/user')
      .set('user-id', userId);
    expect(response.status).toBe(404);
  }, 10000); // Increase timeout to 10 seconds

  it('5 or more requests and waiting returns a 200', async function() {
    // Fire 5 requests in quick succession
    for (let i = 0; i < 5; i++) {
      await request(app).get('/user').set('user-id', userId);
    }
    // Wait for more than 1 second to reset the rate limit
    await new Promise(resolve => setTimeout(resolve, 2000));

    // The next request should pass
    const response = await request(app)
      .get('/user')
      .set('user-id', userId);
    expect(response.status).toBe(200);
  }, 10000); // Increase timeout to 10 seconds
});


