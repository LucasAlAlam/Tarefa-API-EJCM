const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

export const Usuario = sequelize.define('Usuario', {
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            msg: 'O email informado não corresponde ao formato padrão.'
        }
    },
    cep:{
        type: DataTypes.STRING,
        validate: {
            is: /\d{5}-\d{3}/
        }
    },
    numeroCasa:{
        type: DataTypes.INTEGER,
        validate: {
            isNumeric: true,
            msg: 'Deve ser informado apenas números para numeroCasa.'
        }
    },
    salt:{
        type: DataTypes.STRING
    },
    hash:{
        type: DataTypes.STRING
    },
});