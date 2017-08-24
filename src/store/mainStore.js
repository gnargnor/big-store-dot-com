/** state */
let style = require('./style');
let cats = require('./cats');
let header = require('./header');
let shopping = require('./shopping');

/** emitters */
let clickCats = require('./emitters/clickCats');
let clickOneCat = require('./emitters/clickOneCat');
let addCatToCart = require('./emitters/addCatToCart');
let updateSearchCriteria = require('./emitters/updateSearchCriteria');

module.exports = (state, emitter) => {
  /** state */
  style(state, emitter);
  header(state, emitter);
  cats(state, emitter);
  shopping(state, emitter);

  /** emitters */
  emitter.on('clickCats', () => clickCats(state, emitter));
  emitter.on('clickOneCat', (catID) => clickOneCat(catID, state, emitter));
  emitter.on('addCatToCart', (catID) => addCatToCart(catID, state, emitter));
  emitter.on('updateSearchCriteria', (searchCriteria) => updateSearchCriteria(searchCriteria, state, emitter));
}