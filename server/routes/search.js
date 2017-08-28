const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/:searchCriteria/:category', (req, result) => {
  let searchCriteria = req.params.searchCriteria;
  let category = req.params.category;
  console.log(category);
  let searchResults;
  request.get(`${process.env.BB_API_URL}((search=${searchCriteria}${category.categoryId}))?apiKey=${process.env.BB_API_KEY}&sort=bestSellingRank.dsc&show=image,name,regularPrice,salePrice,shortDescription,bestSellingRank&format=json`,
    (err, response, body
    ) => {
      let searchResults = body;
      result.send(searchResults);
    }
  );
});

module.exports = router;