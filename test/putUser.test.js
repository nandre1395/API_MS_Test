describe('PUT /api/users/:id', () => {
    test('Actualiza un usuario existente', async () => {
      const res = await request(app)
        .put(`/api/users/${newUserId}`)
        .send({
          nombresUsuario: 'Juan David',
          celularUsuario: 23156464
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body.celularUsuario).toEqual(9876543210);
    });
    test('Arroja error si el id es inválido', async () => {
      const res = await request(app)
        .put('/api/users/32165')
        .send({
          nombresUsuario: 'Juan David',
          celularUsuario: 23156464
        });
      expect(res.statusCode).toEqual(500);
    });
  });
  