const html = require('choo/html');
let displayCatCart = require('./subviews/displayCatCart');

module.exports = (state, emit) => {
  return html`
    <div class="checkout">
      <h1 style=${state.style.headingH1}>Cart</h1>
      <div style="background: lightyellow; padding: 20px; border: 1px solid black; border-radius: 0 0 8px 8px;">
        ${displayCatCart(state, emit)}
      </div>
      <button onclick=${checkout}>Sounds good!</button>
      ${noDeal()}

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