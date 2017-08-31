let request = require('axios');

module.exports = (state, emitter) => {
  let searchCriteria = state.searchCriteria;
  let category = state.category;

  request.get(`/api/search/searchAll/${searchCriteria}/${category}`)
    .then(result => {
      let parsedDetails = parseSearchResults(result.data.products);
      state.currentSearch = state.searchCriteria;
      state.searchCriteria = '';
      state.category = 'blank';
      state.searchResults = result.data.products;
      state.parsedDetails = parsedDetails;
      emitter.emit('render');
    })
    .catch(err => {
      console.log(err);
    });

    function parseSearchResults(searchResults) {
      let parsedDetails = [];
      state.qtyById = [];
      searchResults.map(result => {
        let productDetails = {};
        let typeDetails;
        productDetails.generalProperties = parseGeneral(result);
        productDetails.rawResults = result;
        productDetails.id = result.sku;
        state.qtyById.push({id: productDetails.id, qty: 0});
        switch (result.type) {
          case 'Music' :
            productDetails.typeDetails = parseMusic(result);
            parsedDetails.push(productDetails);
            return;
          case 'Movie' :
            productDetails.typeDetails = parseMovie(result);
            parsedDetails.push(productDetails);
            return;
          case 'HardGood' :
            productDetails.typeDetails = parseHardgood(result);
            parsedDetails.push(productDetails);
            return;
          case 'Game' :
            productDetails.typeDetails = parseGame(result);
            parsedDetails.push(productDetails);
            return;
          case 'BlackTie' :
            productDetails.typeDetails = parseBlackTie(result);
            parsedDetails.push(productDetails);
            return;
          case 'Software' :
            productDetails.typeDetails = parseSoftware(result);
            parsedDetails.push(productDetails);
            return;
          case 'Bundle' :
            productDetails.typeDetails = parseBundle(result);
            parsedDetails.push(productDetails);
            return;
          default:
            return;
        }
      });
      console.log('parsed details in parseSearchResults: ', parsedDetails);
      return parsedDetails;
    }

    function parseGeneral(currentResult) {
      let arbitraryMarkupPercentage = (Math.random() * 3) / 10 + 1;
      console.log(arbitraryMarkupPercentage);
      let generalProperties = {};
      Object.keys(currentResult).map(property => {
        switch (property) {
          case 'image':
            generalProperties.image = currentResult[property];
            return;
          case 'bestSellingRank':
            generalProperties.bestSellingRank = currentResult[property];
            return;
          case 'customerReviewAverage':
            generalProperties.custermerReviewAverage = currentResult[property];
            return;
          case 'customerReviewCount':
            generalProperties.custermerReviewCount = currentResult[property];
            return;
          case 'freeShipping':
            generalProperties.freeShipping = currentResult[property];
            return;
          case 'regularPrice':
            generalProperties.regularPrice = (currentResult[property] * arbitraryMarkupPercentage).toFixed(2);
            return;
          case 'salePrice':
            generalProperties.salePrice = (currentResult[property] * arbitraryMarkupPercentage).toFixed(2);
            return;
          case 'shipping':
            generalProperties.shippingCost = currentResult[property];
            return;
          case 'name':
            generalProperties.name = currentResult[property];
            return;          
          default:
            return;
        }
      });
      if (generalProperties.salePrice > generalProperties.regularPrice) {
        let newSalePrice = generalProperties.regularPrice;
        generalProperties.regularPrice = generalProperties.salePrice;
        generalProperties.salePrice = newSalePrice;
      }
      let youSave = generalProperties.regularPrice - generalProperties.salePrice;
      generalProperties.youSave = youSave;
      console.log(youSave)
      return generalProperties;
    }

    function parseMusic(result) {
      let musicDetails = {type: 'Music'};
      let details = result.details;
      details.map(detail => {
        switch (detail.name) {
          case 'Artist':
            musicDetails.artist = detail.value;
            return;
          case 'Format':
            musicDetails.format = detail.value;
            return;
          case 'Product Title':
            musicDetails.productName = detail.value;
            return;
          case 'Label':
            musicDetails.label = detail.value;
            return;
          case 'Genre':
            musicDetails.genre = detail.value;
            return;
          default: 
            return;          
        }
      });
      return musicDetails;
    }

    function parseMovie(result) {
      let movieDetails = {type: 'Movie'};
      let details = result.details;
      details.map(detail => {
        switch (detail.name) {
          case 'Product Title' :
            movieDetails.productName = detail.value;
            return;
          case 'Format' :
            movieDetails.format = detail.value;
            return;
          case 'Studio' :
            movieDetails.studio = detail.value;
            return;
          case 'Release Date' :
            movieDetails.releaseDate = detail.value;
            return;
          default:
            return;
        }
      });
      return movieDetails;
    }

    function parseHardgood(result) {
      let hardgoodDetails = {type: 'HardGood'};
      let details = result.details;
      details.map(detail => {
        switch (detail.name) {
          case 'Product Name':
            hardgoodDetails.productName = detail.value;
            return;
          case 'Model Number':
            hardgoodDetails.modelNumber = detail.value;
            return;
          case 'Brand':
            hardgoodDetails.brand = detail.value;
            return;
          case 'Color':
            hardgoodDetails.color = detail.value;
            return;
          default:
            return;
        }
      });
      return hardgoodDetails;
    }

    function parseGame(result) {
      let gameDetails = {type: 'Game'};
      let details = result.details;
      details.map(detail => {
        switch (detail.name) {
          case 'Developer':
            gameDetails.developer = detail.value;
            return;
          case 'Brand':
            gameDetails.brand = detail.value;
          case 'Platform':
            gameDetails.platform = detail.value;
            return;
          case 'Product Name':
            gameDetails.productName = detail.value;
            return;
          case 'Genre':
            gameDetails.genre = detail.value;
            return;
          default:
            return;
        }
      });
      return gameDetails;
    }

    function parseBlackTie(result) {
      let blacktieDetails = {type: 'BlackTie'};
      let details = result.details;
      details.map(detail => {
        switch (detail.name) {
          case 'Product Name':
            blacktieDetails.productName = detail.value;
            return;
          case 'Brand':
            blacktieDetails.brand = detail.value;
            return;
          case 'Plan Type':
            blacktieDetails.planType = detail.value;
            return;
          case 'Protection Type':
            blacktieDetails.protectionType = detail.value;
            return;
          default:
            return;
        }
      });
      return blacktieDetails;
    }

    function parseSoftware(result) {
      let softwareDetails = {type: 'Software'};
      let details = result.details;
      details.map(detail => {
        switch (detail.name) {
          case 'Product Name':
            softwareDetails.productName = detail.value;
            return;
          case 'Brand':
            softwareDetails.brand = detail.value;
            return;
          case 'Publisher':
            softwareDetails.publlisher = detail.value;
            return;
          default:
            return;
        }
      });
      return softwareDetails;
    }

    function parseBundle(result) {
      let bundleDetails = {type: 'Bundle'};
      let details = result.details;
      details.map(detail => {
        switch (detail.name) {
          case 'Product Name':
            bundleDetails.productName = detail.value;
            return;
          case 'Brand':
            bundleDetails.brand = detail.value;
            return;
          default:
            return;
        }
      });
      return bundleDetails;
    }
}