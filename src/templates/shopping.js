const html = require('choo/html');

module.exports = (state, emit) => {
  return html`
    <div class="shopping">
        <label>Search Best Buy Products:</label><br />
        <input type="text" value="search" />
        <button onclick=${submitSearch}>Submit</button>
    </div>
  `

  function submitSearch() {
    console.log('searching');
  }
}