/** state */
let style = require('./style');
let cats = require('./cats');
let header = require('./header');
let shopping = require('./shopping');
let callcops = require('./callcops');

/** emitters */
let clickCats = require('./emitters/clickCats');
let clickOneCat = require('./emitters/clickOneCat');
let addCatToCart = require('./emitters/addCatToCart');
let updateSearchCriteria = require('./emitters/updateSearchCriteria');
let submitSearch = require('./emitters/submitSearch');
const callTheCops = require('./emitters/callTheCops');

module.exports = (state, emitter) => {
  /** state */
  style(state, emitter);
  header(state, emitter);
  cats(state, emitter);
  shopping(state, emitter);
  callcops(state, emitter)

  /** emitters */
  emitter.on('clickCats', () => clickCats(state, emitter));
  emitter.on('clickOneCat', (catID) => clickOneCat(catID, state, emitter));
  emitter.on('addCatToCart', (catID) => addCatToCart(catID, state, emitter));
  emitter.on('updateSearchCriteria', (searchCriteria) => updateSearchCriteria(searchCriteria, state, emitter));
  emitter.on('submitSearch', () => submitSearch(state, emitter));
  emitter.on('callTheCops', () => callTheCops(state, emitter));
}