let request = require('axios');

module.exports = (state, emitter) => {
  let searchCriteria = state.searchCriteria;
  let category = state.category;
  console.log('category: ', category);

  request.get(`/api/search/${searchCriteria}/${category}`)
    .then(result => {
      state.searchResults = result.data.products;
      console.log(state.searchResults);
      emitter.emit('render');
    })
    .catch(err => {
      console.log(err);
    });
}