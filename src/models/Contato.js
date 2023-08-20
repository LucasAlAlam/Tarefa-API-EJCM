const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Contato = sequelize.define('Contato', {
    codPais:{
        type: DataTypes.INTEGER,
        defaultValue: 55,
        validate: {
            isInt: true,
        }
    },
    codArea:{
        type: DataTypes.INTEGER,
        validate: {
            isInt: true,
        }
    },
    numero:{
        type: DataTypes.STRING,
        validate: {
            isNumeric: true,
        }
    }
});

Contato.associate = (models) => {
    Contato.belongsTo(models.Usuario);
};

module.exports = Contato;