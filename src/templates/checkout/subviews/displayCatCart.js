let html = require('choo/html');

module.exports = (state, emit) => {
  let cart = state.catCart;
  console.log(cart);
  return cart.map((cat) => {
    return html`<li style="list-style: none; margin-bottom:8px;">Lucky you! ${cat.qty} instances of ${cat.name}!! How about \$${generatePrice(cat.qty)}?</li>`
  })

  function generatePrice(qty) {
    return Math.floor(Math.random() * 1000) * qty;
  }
}