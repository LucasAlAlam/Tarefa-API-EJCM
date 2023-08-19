const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Compra = sequelize.define('Compra', {
    chaveAcessoNFE: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /\d{44}/,
            msg: 'Código inválido. Digite a sequência de 44 números correspondente a chave de acesso da nota fiscal.'
        }
    }
});

module.exports = Compra;