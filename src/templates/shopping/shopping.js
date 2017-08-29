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
      <p>search results for <span style=${state.style.searchTerm}>${state.currentSearch}</span></p>
    </div>
    `;
    let display = (state.searchResults[0]) ? header : '';
    return display;
  }

  function displayResults() {
    let searchResults = state.searchResults;
    let parsedDetails = state.parsedDetails;
    console.log('parsedDetails ', parsedDetails);
    let regularPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
    return parsedDetails.map(result => {
      let generalProperties = result.generalProperties;
      let typeDetails = result.typeDetails;
      let type = typeDetails.type;
      return html`
      <div style=${state.style.row}>
        <div style=${state.style.resultLeft}>
          <img src=${generalProperties.image} style=${state.style.image} />
        </div>
        <div style=${state.style.resultRight}>
          <p style=${state.style.productName}>${typeDetails.productName}</p>
          <p style=${state.style.label}>Regular Price: <span style=${state.style.price}>${regularPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
          <p style=${state.style.label}>Sale Price: <span style=${state.style.salePrice}>${regularPrice.format(generalProperties.salePrice * 1.2)}</span></p>
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