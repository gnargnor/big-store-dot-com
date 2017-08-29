module.exports = (state, emitter) => {
  state.style.homepage = (state.style.homepage === "color: red;") ? "color: white;" : "color: red;";
  emitter.emit('render');
}