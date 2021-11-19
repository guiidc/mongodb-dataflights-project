db.voos.deleteMany(
  {
    "empresa.nome": "AZUL",
    litrosCombustivel: { $exists: true, $lt: 400 },
  },
);

// foram deletados 538 documentos contendo as informações passadas na query.