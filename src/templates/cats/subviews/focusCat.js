let html = require('choo/html');

module.exports = (state, emit) => {
  if (state.cat !== null){
    return html`
      <div>
        <h1 style=${state.style.headingH1}>${state.cat.name}</h1>
        <button id=${state.cat.id} onclick=${addCatToCart}>add ${state.cat.name} to cart</button>
      </div>
    `
  } else {
    return;
  }

  function addCatToCart(e) {
    let catID = e.target.id;
    emit('addCatToCart', catID);
  }
}