const html = require('choo/html');
const generateCategories = require('./generateCategories');

module.exports = (state, emit) => {
  let searchCriteria = state.searchCriteria;
  return html`
      <div style=${state.style.searchBar}>
        <div style=${state.style.searchBarContainer}>
          <label>Search ${state.header.storeName} Products:</label>
          <input style=${state.style.searchInput} type="text" value=${searchCriteria} oninput=${updateSearchCriteria}/>
          <select name="categories" style=${state.style.dropdown} onchange=${selectCategory}>
            ${generateCategories(state)}
          </select>
          <a href="/shopping"><button style=${state.style.searchButton} onclick=${submitSearch}>Submit</button></a>
        </div>
      </div>
    `

    function selectCategory(e){
      let newCategory = e.target.value;
      emit('updateCategory', e.target.value);
    }
  
    function updateSearchCriteria(e) {
      emit('updateSearchCriteria', e.target.value);
    }
  
    function submitSearch() {
      emit('submitSearch');
    }
}