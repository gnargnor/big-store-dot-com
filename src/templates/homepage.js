let html = require('choo/html');
let searchBar = require('./searchBar/searchBar');

module.exports = (state, emit) => {
  return html`
    <div style=${state.style.homepage}>
      ${searchBar(state, emit)}
      <div style=${state.style.homepageContainer}>
        <p>You only need to know about the <span style=${state.style.clickCats} onclick=${clickCats}>cats.</span></p>
      </div>
    </div>
  `
  
  function clickCats(){
    emit('clickCats');
  }
}