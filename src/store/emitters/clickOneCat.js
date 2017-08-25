
let findInArray = require('../helpers/findInArray');

module.exports = (catID, state, emitter) => {
  let singleCat = findInArray(catID, state.cats);
  state.cat = singleCat;
  emitter.emit('render');
}