const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/db")
const Model = Sequelize.Model;

class Test extends Model { }

Test.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title2: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: "tbl_test",
})
module.exports = Test;
