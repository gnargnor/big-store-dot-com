let html = require('choo/html');

/** views */
let header = require('./header');
let cats = require('./cats/cats');
let shopping = require('./shopping/shopping');
let checkout = require('./checkout/checkout');

module.exports = (view, state, emit) => {
  return html`
    <div class="layout" style=${state.style.layout}>
      ${header(state, emit)}
      ${view(state, emit)}
    </div>
  `
}