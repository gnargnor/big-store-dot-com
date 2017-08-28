/** state */
const style = require('./style');
const cats = require('./cats');
const header = require('./header');
const shopping = require('./shopping');
const callcops = require('./callcops');

/** emitters */
const clickCats = require('./emitters/clickCats');
const clickOneCat = require('./emitters/clickOneCat');
const addCatToCart = require('./emitters/addCatToCart');
const updateSearchCriteria = require('./emitters/updateSearchCriteria');
const updateCategory = require('./emitters/updateCategory');
const submitSearch = require('./emitters/submitSearch');
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
  emitter.on('updateCategory', (newCategory) => updateCategory(newCategory, state, emitter));
  emitter.on('submitSearch', () => submitSearch(state, emitter));
  emitter.on('callTheCops', () => callTheCops(state, emitter));
}