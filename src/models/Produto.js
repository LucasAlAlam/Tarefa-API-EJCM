const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Produto = sequelize.define('Produto', {
    imagem:{
        type: DataTypes.STRING,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isNull: {
                msg: 'Insira um nome para o produto'
            }
        }
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate:{
            isNull: {
                msg: 'Insira um valor para o produto'
            }
        }
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
    Produto.hasOne(models.Vendedor);
}