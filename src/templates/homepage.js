let html = require('choo/html');

module.exports = (state, emit) => {
  return html`
    <div class="homepage" style=${state.style.homepage}>
      <p>You only need to know about the <span onclick=${clickCats}>cats.</span></p>
    </div>
  `
  
  function clickCats(){
    console.log('clicked cats');
    emit('clickCats');
  }
}