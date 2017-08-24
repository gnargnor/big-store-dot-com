const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const open = require('open');

const app = express();
const port = process.env.PORT || 5000;
const compiler = webpack(config);

app.use("/dist", express.static("dist"));

app.get('*', (req, res) => {
    console.log('Serving ', req.url, __dirname);
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`)
    }
});