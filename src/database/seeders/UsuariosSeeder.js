const Usuario = require("../../models/Usuario");
const faker = require('faker-br');

const seedUsuario = async () => {
  try {
    await Usuario.sync({ force: true });

    for (let i = 0; i < 10; i++) {
      await Usuario.create({
        email: faker.internet.email(),
        cep: faker.address.zipCodeValid(),
        numeroCasa: faker.random.number(9999),
      });
    }
  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedUsuario;
