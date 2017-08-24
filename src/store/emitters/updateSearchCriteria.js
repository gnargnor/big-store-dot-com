module.exports = (newSearchCriteria, state, emitter) => {
  state.searchCriteria = newSearchCriteria;

  emitter.emit('render');
}