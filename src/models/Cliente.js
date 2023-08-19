const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Cliente = sequelize.define('Cliente', {
    nomeCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Deve ser informado um nome para o cadastro.',
            }
        }
    }
});

Cliente.associate = (models) => {
    Cliente.belongsTo(models.Usuario);
    Cliente.belongsToMany(models.Produto, { 
        through: 'Compra',
        as: 'idCompraCliente',
        foreignKey: 'idCliente'
    });
    Cliente.belongsToMany(models.Produto, {
        through: 'Deseja',
        as: 'idDesejoCliente',
        foreignKey: 'idCliente'
    });
};

module.exports = Cliente;