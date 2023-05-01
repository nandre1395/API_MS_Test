describe('POST /api/users', () => {
    test('Agrega un nuevo usuario', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({
          nombresUsuario: 'Juan David',
          celularUsuario: 23156464
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body.nombresUsuario).toEqual('Juan David');
      expect(res.body.celularUsuario).toEqual(23156464);
    });
    test('Arroja un error si falta un campo', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({
          nombresUsuario: 'Juan David'
        });
      expect(res.statusCode).toEqual(400);
    });
  });
  