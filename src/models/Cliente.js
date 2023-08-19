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
    Cliente.hasOne(models.Usuario);
}

module.exports = Cliente;