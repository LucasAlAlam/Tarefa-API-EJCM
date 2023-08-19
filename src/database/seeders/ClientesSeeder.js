const Clientes  = require("../../models/Cliente");
const faker = require('faker-br');

const seedClientes = async function () {
  try {
    await Clientes.sync({ force: true });

    for (let i = 0; i < 10; i++) {
      await Clientes.create({
        nomeCompleto: `${faker.name.firstName()} ${faker.name.lastName()}`,
      });
    }
  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedClientes;
