const html = require('choo/html');
const displayResultHeader = require('./subviews/displayResultHeader');
const displayResults = require('./subviews/displayResults');
const searchBar = require('../searchBar/searchBar');

module.exports = (state, emit) => {
  return html `
    <div style=${state.style.shopping}>
      ${searchBar(state, emit)}
      <div style=${state.style.shoppingContainer}>
        <div style=${state.style.searchResults}>
          ${displayResultHeader(state)}
          ${displayResults(state)}
        </div>
      </div>
    </div>
  `

  
}