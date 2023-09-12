const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define("user", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    userName:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate:{
            notEmpty: true
        }
    },

    password:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },

    email:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },

    firstName:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },

    lastName:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },

    middleName:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },

    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        validate:{
            notEmpty: true
        }
    },

    birthDate:{
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },

    address:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }

});

module.exports = User;