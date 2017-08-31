const html = require('choo/html');
let displayCart = require('./displayCart');
let displayCatCart = require('./subviews/displayCatCart');
let searchBar = require('../searchBar/searchBar');

module.exports = (state, emit) => {
  return html`
    <div style=${state.style.checkout}>
      ${searchBar(state, emit)}
      <div style=${state.style.checkoutContainer}>
        <p style=${state.style.checkoutHeader}>Your Cart</p>
        ${displayCart(state, emit)}
      </div>
    </div>
  `

  

  function checkout() {
    noDeal();
  }

  function noDeal() {
    console.log('no deal');
    let deal = state.noDeal ? false : true;
    if (!deal) {
      return html`<h1>NO DEAL</h1>`
    } else {
      return html`<h1>OK</h1>`
    }
  }
}