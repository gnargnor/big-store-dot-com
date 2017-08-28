module.exports = (newCategory, state, emitter) => {
  console.log('new category: ', newCategory);
  state.category = newCategory;
}