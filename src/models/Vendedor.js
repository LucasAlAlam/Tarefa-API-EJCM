const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Vendedor = sequelize.define('Vendedor', {
    cnpj:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /\d{2}.\d{3}.\d{3}\/[0]{3}[1-2]-\d{2}/,
            msg: 'O cnpj informado possui inconsistências.'
        }
    }
});

Vendedor.associate = (models) => {
    Vendedor.hasOne(models.Usuario)
};

module.exports = Vendedor;