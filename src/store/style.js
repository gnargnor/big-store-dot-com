module.exports = (state, emitter) => {
  state.style = {
    /** pages */
    layout: `
      padding: 20px 30px;
      width: 90%; margin: 0 auto;
      background: lightblue;
      border-radius: 30px 30px 0 0;
      font-family: 'Helvetica', sans-serif;`,

    homepage: `
      color: blue;`,

    navBar: `
      margin: 0 auto; background: white;
      border-radius: 6px;`,

    navItem: 
      `padding:5px 10px; display: inline-block; list-style: none;`,

    headerH1: `
      font-size: 50px;
      margin: 0; padding-bottom: 0;`,

    headerH2: `
      font-size: 30px;
      margin: 0; padding-left: 10px;
      padding-top: 5px;`,
      
    catItem: `
      padding:5px 10px;
      display: inline-block;
      list-style: none;
      cursor: pointer;`
  }
}