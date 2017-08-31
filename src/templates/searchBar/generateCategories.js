const html = require('choo/html');

module.exports = (state) => {
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