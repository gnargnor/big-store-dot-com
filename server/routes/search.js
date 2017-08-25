const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/:searchCriteria', (req, result) => {
  let searchCriteria = req.params.searchCriteria;
  let searchResults;
  request.get(`${process.env.BB_API_URL}((search=${searchCriteria}))?apiKey=${process.env.BB_API_KEY}&sort=bestSellingRank.dsc&show=image,name,regularPrice,salePrice,shortDescription,bestSellingRank&format=json`,
    (err, response, body
    ) => {
      let searchResults = body;
      result.send(searchResults);
    }
  );
});

module.exports = router;