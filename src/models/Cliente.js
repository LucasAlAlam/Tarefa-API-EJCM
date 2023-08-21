const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Cliente = sequelize.define('Cliente', {
    nomeCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

Cliente.associate = (models) => {
    Cliente.belongsTo(models.Usuario);
    Cliente.belongsToMany(models.Produto, { 
        through: 'Compras',
        as: 'Comprou',
        foreignKey: 'idCliente'
    });
    Cliente.belongsToMany(models.Produto, {
        through: 'Deseja',
        as: 'Desejo',
        foreignKey: 'idCliente'
    });
};

module.exports = Cliente;