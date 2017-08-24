const html = require('choo/html');
let displayCats = require('./subviews/displayCats');
let focusCat = require('./subviews/focusCat');
let catCart = require('./subviews/catCart');


module.exports = (state, emit) => {
  return html`
    <div>
      ${displayCats(state, emit)}
      <br />
      <div class="shopping">
        <div style="display: inline-block; float: left; padding: 10px; margin-left: 5%;margin-top:4px; background: lightyellow; border: 1px solid black; border-radius: 8px; width: 40%;">
          <h3>Current Cat</h3>
          ${focusCat(state, emit)}
        </div>
        <div style="display: inline-block; float: right; padding: 10px; margin-right: 5%; margin-top:4px; background: lightyellow; border: 1px solid black; border-radius: 8px; width: 40%;">
          <h3>Cat Cart</h3>
          ${catCart(state)}
        </div>
      </div>
      <br />
    </div>  
  `
}