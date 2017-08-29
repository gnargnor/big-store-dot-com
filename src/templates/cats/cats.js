const html = require('choo/html');
let displayCats = require('./subviews/displayCats');
let focusCat = require('./subviews/focusCat');
let catCart = require('./subviews/catCart');


module.exports = (state, emit) => {
  return html`
    <div style=${state.style.catShopping}>
      <div style=${state.style.catNav}>
        <div style=${state.style.catNavContainer}>
          ${displayCats(state, emit)}
        </div>
      </div>
      <div style=${state.style.catShoppingContainer}>
        <div style=${state.style.catShoppingLeft}>
          <h3 style=${state.style.catH3}>Current Cat</h3>
          ${focusCat(state, emit)}
        </div>
        <div style=${state.style.catShoppingRight}>
          <h3 style=${state.style.catH3}>Cat Cart</h3>
          ${catCart(state)}
        </div>
      </div>
    </div>  
  `
}