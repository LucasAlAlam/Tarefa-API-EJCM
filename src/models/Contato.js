const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

export const Contato = sequelize.define('Contato', {
    codPais:{
        type: DataTypes.INTEGER,
        defaultValue: 55,
        validate: {
            isInt: true,
            msg: 'Insira um número para o código de país'
        }
    },
    codArea:{
        type: DataTypes.INTEGER,
        validate: {
            isInt: true,
            msg: 'Insira um número para o código de área'
        }
    },
    numero:{
        type: DataTypes.STRING,
        validate: {
            isNumeric: true,
            msg: 'Insira apenas números para a informação de número de telefone'
        }
    }
});

Contato.associate = (models) => {
    Contato.hasOne(models.Usuario);
};

module.exports = Contato;