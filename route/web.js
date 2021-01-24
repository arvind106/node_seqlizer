const route = require('express').Router();
const Blog = require("../controllers/BlogController");

route.get("/blog", Blog.list);
module.exports = route;