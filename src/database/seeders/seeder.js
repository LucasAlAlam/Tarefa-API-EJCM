require('../../config/dotenv')();
require('../../config/sequelize');

const seedModel = require('./ClientesSeeder');

(async () => {
  try {
    await seedModel();

  } catch (err) { console.log(err) }
})();
