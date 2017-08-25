let request = require('axios');

module.exports = (state, emitter) => {
  let searchCriteria = state.searchCriteria;

  request.get(`/api/search/${searchCriteria}`)
    .then(result => {
      state.searchResults = result.data.products;
      console.log(state.searchResults);
      emitter.emit('render');
    })
    .catch(err => {
      console.log(err);
    });
}