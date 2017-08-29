const html = require('choo/html');

module.exports = (state, emit) => {
  console.log(state.policeReport);
  return html `
    <div style=${state.style.callCops}>
      <div style=${state.style.callCopsContainer}>
        <h1>Police Reports</h1>
        <button onclick=${callTheCops}>Call the Cops</button>
        ${policeReport()}
      </div>
      
    </div>
    
  `

  function callTheCops() {
    emit('callTheCops');
  }

  function policeReport() {
    return state.policeReport.map(report => {
      return html`
        <div style=${state.style.row}>
          <h2>
            ${report._source.description}
          </h2>
          <p>${report._source.public_address}</p>
        </div>
      `
    });
  }
}