let request = require('axios');

module.exports = (itemId, state, emitter) => {
  console.log(itemId);
  return request.get(`/api/search/cartItemById/${itemId}/`)
  .then(result => {
    console.log(result);
    return result.name;
  })
  .catch(err => {
    console.log(err);
  });
}

