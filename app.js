const express = require('express');
const app = express();
const config = require('./config/config');
app.use('/api/v1', require('./route/web'));
// const Test = require('./models/Test');
// const db =require('./config/db');
// db.sync()

app.listen(config.PORT, () => {
    console.log('Server run on Port ' + config.PORT);
})