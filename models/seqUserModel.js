const { password } = require("../config/config")
const sequelize = require("../config/sequelize_database")
const {DataTypes } = require("sequelize")

const User = sequelize.define(
    "User",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
     timestamps: true
    }
)

module.exports = User