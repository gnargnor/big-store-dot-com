
const html = require('choo/html');

module.exports = (state => {
  let currentSearch = state.currentSearch;
  let currentCategoy = state.category;
  let header = html`
    <div>
      <p>search results for <span style=${state.style.searchTerm}>${state.currentSearch}</span></p>
    </div>
  `;
  let display = (state.searchResults[0]) ? header : '';
  return display;
});