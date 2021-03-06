const express = require('express');
const router = express.Router();
const request = require('request');


router.get('/cartItemById/:itemId', (req, result) => {
  let itemId = req.params.itemId;
  console.log(itemId);
  let searchResults;
  request.get(`${process.env.BB_API_URL}(sku in(${itemId}))?apiKey=${process.env.BB_API_KEY}&sort=bestSellingRank.asc&show=accessories.sku,addToCartUrl,bestSellingRank,categoryPath.id,categoryPath.name,color,condition,customerReviewAverage,customerReviewCount,description,details.name,details.value,dollarSavings,features.feature,freeShipping,frequentlyPurchasedWith.sku,image,includedItemList.includedItem,inStoreAvailability,inStoreAvailabilityText,longDescription,manufacturer,mobileUrl,modelNumber,name,onlineAvailability,onlineAvailabilityText,onSale,percentSavings,preowned,regularPrice,relatedProducts.sku,salePrice,shipping,shippingCost,shortDescription,sku,thumbnailImage,type,upc,url&format=json`,
    (err, response, body) => {
      let searchResults = body;
      console.log(body);
      if (err) {
        console.log(err);
      }
      result.send(searchResults);
    }
  )
})

router.get('/searchAll/:searchCriteria/:category', (req, result) => {
  let searchCriteria = req.params.searchCriteria;
  let category;
  req.params.category === 'blank' ? category = '' : category = req.params.category;
  console.log(searchCriteria, category);
  let searchResults;
  request.get(`${process.env.BB_API_URL}((search=${searchCriteria}${category}))?apiKey=${process.env.BB_API_KEY}&sort=bestSellingRank.asc&show=accessories.sku,addToCartUrl,bestSellingRank,categoryPath.id,categoryPath.name,color,condition,customerReviewAverage,customerReviewCount,description,details.name,details.value,dollarSavings,features.feature,freeShipping,frequentlyPurchasedWith.sku,image,includedItemList.includedItem,inStoreAvailability,inStoreAvailabilityText,longDescription,manufacturer,mobileUrl,modelNumber,name,onlineAvailability,onlineAvailabilityText,onSale,percentSavings,preowned,regularPrice,relatedProducts.sku,salePrice,shipping,shippingCost,shortDescription,sku,thumbnailImage,type,upc,url&format=json`,
    (err, response, body) => {
      let searchResults = body;
      if (err) {
        console.log(err);
      }
      result.send(searchResults);
    });
});

module.exports = router;