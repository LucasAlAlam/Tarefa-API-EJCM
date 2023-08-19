const Vendedor = require("../../models/Vendedor");
const faker = require('faker-br');

const seedVendedor = async () => {
  try {
    await Vendedor.sync({ force: true });

    for (let i = 0; i < 10; i++) {
      await Vendedor.create({
        cnpj: faker.br.cnpj()
      });
    }
  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedVendedor;