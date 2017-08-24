let html = require('choo/html');

module.exports = (state) => {
  return state.catCart.map(cat => {
    return html`<li style="list-style: none; padding-bottom: 4px;"><span style="font-size: 24px;">${cat.name}</span>  qty: ${cat.qty}</li>`
  })
}