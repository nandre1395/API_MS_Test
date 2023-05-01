describe('GET /api/users/:id', () => {
    test('Muestra a un usuario según un id', async () => {
      const res = await request(app).get(`/api/users/${newUserId}`);
      expect(res.statusCode).toEqual(404);
    });
    test('Error si el id es incorrecto', async () => {
      const res = await request(app).get('/api/users/354156');
      expect(res.statusCode).toEqual(500);
    });
  });