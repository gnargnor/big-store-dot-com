const html = require('choo/html');

module.exports = (state, emit) => {
  let searchCriteria = state.searchCriteria;
  return html`
    <div style=${state.style.shopping}>
      <div style=${state.style.searchBar}>
        <div style=${state.style.searchBarContainer}>
          <label>Search ${state.header.storeName} Products:</label>
          <input style=${state.style.searchInput} type="text" value=${searchCriteria} oninput=${updateSearchCriteria}/>
          <select name="categories" style=${state.style.dropdown} onchange=${selectCategory}>
            ${generateCategories()}
          </select>
          <button style=${state.style.searchButton} onclick=${submitSearch}>Submit</button>
        </div>
      </div>
      <div style=${state.style.shoppingContainer}>
        
        <div style=${state.style.searchResults}>
          ${displayResultHeader()}
          ${displayResults()}
        </div>
      </div>
    </div>
  `

  function selectCategory(e){
    let newCategory = e.target.value;
    emit('updateCategory', e.target.value);
  }

  function displayResultHeader() {
    let currentSearch = state.currentSearch;
    let currentCategoy = state.category;
    let header = html`
    <div>
      <h2>search results for <b>${state.currentSearch}</b></h2>
    </div>
    `;
    let display = (state.searchResults[0]) ? header : '';
    return display;
  }

  function displayResults() {
    let searchResults = state.searchResults;
    console.log(searchResults);
    return searchResults.map(result => {
      return html`
      <div style=${state.style.row}>
        <div style=${state.style.resultLeft}>
          <img src=${result.image} style=${state.style.image} />
        </div>
        <div style=${state.style.resultRight}>
          <p style=${state.style.floatingLineBreak}>${result.name}</p>
          <p>${result.regularPrice}</p>
        </div>
        <div style=${state.style.clearFloat}></div>
      </div>
      `
    });
  }

  function generateCategories() {
    let categories = state.categories;
    let currentCategoryId = state.category;
    return categories.map(category => {
      if (category.categoryId === currentCategoryId) {
        console.log(category.name, category.categoryId);
        return html`
          <option value=${category.categoryId} selected>${category.name}</option>
        `
      } else {
        return html`
          <option value=${category.categoryId}>${category.name}</option>
        `
      }
    });
  }

  function updateSearchCriteria(e) {
    emit('updateSearchCriteria', e.target.value);
  }

  function submitSearch() {
    emit('submitSearch');
  }
}