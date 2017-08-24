const html = require('choo/html');

module.exports = (state, emit) => {
  let searchCriteria = state.searchCriteria;
  return html`
    <div class="shopping">
        <label>Search Best Buy Products:</label><br />
        <input type="text" value=${searchCriteria} oninput=${updateSearchCriteria}/>
        ${searchCriteria}
    </div>
  `

  function updateSearchCriteria(e) {
    emit('updateSearchCriteria', e.target.value);
  }
}