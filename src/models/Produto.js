const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Produto = sequelize.define('Produto', {
    imagem:{
        type: DataTypes.STRING,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantidadeEstoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    novo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

Produto.associate = (models) => {
    Produto.belongsTo(models.Vendedor);
    Produto.belongsToMany(models.Cliente, {
        through: 'Compra',
        as: 'idCompraProduto',
        foreignKey: 'idProduto'
    })
    Produto.belongsToMany(models.Cliente, {
        through: 'Deseja',
        as: 'idDesejoProduto',
        foreignKey: 'idProduto'
    })
}

module.exports = Produto;