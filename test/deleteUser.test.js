describe('DELETE /api/users/:id', () => {
    test('elimina un usuario existente', async () => {
      const res = await request(app).delete(`/api/users/${newUserId}`);
      expect(res.statusCode).toEqual(200);
    });
    test('Arroja error si el id es inválido', async () => {
      const res = await request(app).delete('/api/users/35241654');
      expect(res.statusCode).toEqual(500);
    });
  });
  