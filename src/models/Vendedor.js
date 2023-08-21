const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Vendedor = sequelize.define('Vendedor', {
    cnpj:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /\d{2}.\d{3}.\d{3}\/[0]{3}[1-2]-\d{2}/
        }
    }
});

Vendedor.associate = (models) => {
    Vendedor.belongsTo(models.Usuario);
    Vendedor.hasMany(models.Produto);
};

module.exports = Vendedor;