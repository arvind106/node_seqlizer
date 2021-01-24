const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/db")
const Model = Sequelize.Model;

class Blog extends Model { }

Blog.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    short_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: db,
    // modelName:"tbl_blog",
    tableName: 'tbl_blog',
    timestamps: false,
})
module.exports = Blog;
