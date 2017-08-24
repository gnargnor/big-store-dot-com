const html = require('choo/html');

module.exports = (state, emit) => {
  return html`
    <div class="checkout">
      <h1 style=${state.style.headingH1}>Cart</h1>
      <div style="background: yellow; padding: 20px; border: 1px solid black; border-radius: 0 0 8px 8px;">
        ${displayCatCart()}
      </div>
      <button onclick=${checkout}>Sounds good!</button>
      ${noDeal()}

    </div>
  `
  function displayCatCart() {
    let cart = state.catCart;
    console.log(cart);
    return cart.map((cat) => {
      return html`<li style="list-style: none; margin-bottom:8px;">Lucky you! ${cat.qty} instances of ${cat.name}!! How about \$${generatePrice(cat.qty)}?</li>`
    })
  }

  function generatePrice(qty) {
    return Math.floor(Math.random() * 1000) * qty;
  }

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