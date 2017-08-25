const express = require('express');
const router = express.Router();
const request = require('request');
const path = require('path');

module.exports = (req, res) => {
  console.log('Serving ', req.url, __dirname);
  res.sendFile(path.resolve('server/index.html'));
};
