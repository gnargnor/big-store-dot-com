const html = require('choo/html');

module.exports = (state, emit) => {
  return html`
    <div>
      ${displayCats()}
      <br />
      <div class="shopping">
        <div style="display: inline-block; float: left; padding: 10px; margin-left: 5%;margin-top:4px; background: yellow; border: 1px solid black; border-radius: 8px; width: 40%;">
          <h3>Current Cat</h3>
          ${focusCat()}
        </div>
        <div style="display: inline-block; float: right; padding: 10px; margin-right: 5%; margin-top:4px; background: yellow; border: 1px solid black; border-radius: 8px; width: 40%;">
          <h3>Cat Cart</h3>
          ${catCart()}
        </div>
      </div>
      
      <br />
    </div>  
  `

  function displayCats() {
    let cats = state.cats;
    return cats.map(cat => {
      return html`<li style=${state.style.catItem} id=${cat.id} onclick=${clickOneCat}>${cat.name}</li>`
    })
  }

  function focusCat() {
    if (state.cat !== null){
      return html`
        <div>
          <h1 style=${state.style.headingH1}>${state.cat.name}</h1>
          <button id=${state.cat.id} onclick=${addCatToCart}>add ${state.cat.name} to cart</button></div>
      `
    } else {
      return;
    }
  }

  function addCatToCart(e) {
    let catID = e.target.id;
    emit('addCatToCart', catID);
  }

  function catCart() {
    return state.catCart.map(cat => {
      return html`<li style="list-style: none; padding-bottom: 4px;"><span style="font-size: 24px;">${cat.name}</span>  qty: ${cat.qty}</li>`
    })
  }

  function clickOneCat(e) {
    let catID = e.target.id;
    emit('clickOneCat', catID);
  }
}