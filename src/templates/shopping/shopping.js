const html = require('choo/html');

module.exports = (state, emit) => {
  let searchCriteria = state.searchCriteria;
  return html`
    <div class="shopping">
        <label>Search ${state.header.storeName} Products:</label>
        <input style=${state.style.searchInput} type="text" value=${searchCriteria} oninput=${updateSearchCriteria}/>
        <select name="categories" style=${state.style.dropdown} onchange=${selectCategory}>
          ${generateCategories()}
        </select>

        <button style=${state.style.searchButton} onclick=${submitSearch}>Submit</button>
        <br />
        <br />
        ${displayResultHeader()}
        ${displayResults()}
    </div>
  `

  function selectCategory(e){
    emit('updateCategory', e.target.value);
  }

  function displayResultHeader() {
    let header = html`
    <div>
      <h2>search results for <b>${searchCriteria}</b></h2>
    </div>
      
    `;
    let display = (state.searchResults[0]) ? header : '';
    return display;
  }

  function displayResults() {
    return state.searchResults.map(result => {
      return html`
      <div style=${state.style.row}>
        <div style=${state.style.resultLeft}>
          <img src=${result.image} style=${state.style.image} />
        </div>
        <div style=${state.style.resultRight}>
          <p>${result.name}</p>
          <p>${result.regularPrice}</p>
        </div>
      </div>
      `
    });
  }

  function generateCategories() {
    let categories = state.categories;
    let currentCategory = state.category;
    console.log(categories);
    return categories.map(category => {
      if (category.categoryId === currentCategory) {
        console.log(category);
        return `
        <option value=${category} selected>${category.name}</option>
        `
      } else {
        return html`
        <option value=${category}>${category.name}</option>
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