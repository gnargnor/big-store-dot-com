module.exports = (state, emitter) => {
  state.style.homepage = (state.style.homepage === "color: red;") ? "color: blue;" : "color: red;";
  emitter.emit('render')
}