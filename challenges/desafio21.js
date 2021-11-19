db.voos.findOne(
  { litrosCombustivel: { $gte: 1000, $exists: true } },
  { vooId: true, _id: false },
);