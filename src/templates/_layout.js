const html = require('choo/html');

/** views */
const header = require('./header');
const cats = require('./cats/cats');
const shopping = require('./shopping/shopping');
const checkout = require('./checkout/checkout');
const callcops = require('./callcops/callcops');

module.exports = (view, state, emit) => {
  return html`
    <div class="layout" style=${state.style.layout}>
      ${header(state, emit)}
      ${view(state, emit)}
    </div>
  `
}