let request = require('axios');

module.exports = (itemId, state, emitter) => {
  console.log(itemId);
  return request.get(`/api/search/cartItemById/${itemId}/`)
  .then(result => {
    console.log('result: ', result);
    let product = result.data.products[0];
    console.log('return in emitter', product);
    state.itemDisplay.push(product);
  })
  .catch(err => {
    console.log(err);
  });
}

