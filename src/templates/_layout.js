let html = require('choo/html');

let header = require('./header');
let cats = require('./cats');
let shopping = require('./shopping');
let checkout = require('./checkout');

module.exports = (view, state, emit) => {
  return html`
    <div class="main" style=${state.style.layout}>
      ${header(state, emit)}
      ${view(state, emit)}
    </div>
  `
}