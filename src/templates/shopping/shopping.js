const html = require('choo/html');

module.exports = (state, emit) => {
  let searchCriteria = state.searchCriteria;
  return html`
    <div class="shopping">
        <label>Search ${state.header.storeName} Products:</label>
        <input style=${state.style.searchInput} type="text" value=${searchCriteria} oninput=${updateSearchCriteria}/>
        <button style=${state.style.searchButton} onclick=${submitSearch}>Submit</button>
        <br />
        <br />
        ${displayResultHeader()}
        ${displayResults()}
    </div>
  `

  function displayResultHeader() {
    let header = html`
    <div>
      <h2>search results for <b>${searchCriteria}</b></h2>
    </div>
      
    `;
    console.log(state.searchResults);
    let display = (state.searchResults[0]) ? header : '';
    return display;
  }

  function displayResults() {
    return state.searchResults.map(result => {
      return html`
      <div style=${state.style.row}>
        <div style=${state.style.resultRight}>
          <h3>${result.name}</h3>
          <p>${result.regularPrice}</p>
        </div>
        <div style=${state.style.resultLeft}>
          <img src=${result.image} style=${state.style.image} />
        </div>
      </div>
        
      `
    })
  }

  function updateSearchCriteria(e) {
    emit('updateSearchCriteria', e.target.value);
  }

  function submitSearch() {
    emit('submitSearch');
  }
}