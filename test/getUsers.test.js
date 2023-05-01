

describe('GET /api/users', () => {
    test('muestra la lista de usuarios', async () => {
      const res = await request(app).get('/api/users');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
    });
  });