const empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: db.voos.find({
    "empresa.nome": "LATAM AIRLINES BRASIL",
    natureza: "Doméstica",
  }).count(),
});

db.resumoVoos.findOne(
  { empresa },
  { empresa: true, totalVoosDomesticos: true, _id: false },
);
