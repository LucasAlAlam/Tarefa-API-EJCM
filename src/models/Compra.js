const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Compra = sequelize.define('Compras', {});

module.exports = Compra;