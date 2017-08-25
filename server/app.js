const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config');
const open = require('open');
require ('./services/elasticsearch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const compiler = webpack(config);

const search = require('./routes/search');
const index = require('./routes/index');

app.use(express.static('server'));

app.use('/api/search', search);
app.get('*', index);


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`)
    }
});