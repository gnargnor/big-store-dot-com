let html = require('choo/html');

module.exports = (state, emit) => {
  let cats = state.cats;
  return cats.map(cat => {
    return html`<li style=${state.style.catItem} id=${cat.id} onclick=${clickOneCat}>${cat.name}</li>`
  })

  function clickOneCat(e) {
    let catID = e.target.id;
    emit('clickOneCat', catID);
  }
}

