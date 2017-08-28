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
      `padding:5px 10px; display: inline-block; list-style: none; flex: 1 1 20%;`,

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
      cursor: pointer;`,

    searchInput: `
      margin-left: 10px;
      width: 200px;`,

    dropdown: `
      margin-left: 10px;
    `,

    searchButton: `
      float: right;
      display: inline-block;  
    `,

    row: `
      width: 100%;
      whitespace: normal;
      height: auto;
      min-height: 100px;
      display: block;
      background: lightyellow;
      padding: 10px;
      margin-bottom: 6px;
      border-radius: 6px;
    `,
    resultRight: `
      height: 100%;
      width: 60%
      flex:60%;
      display: inline-block;
      text-align: left;
      vertical-align: top;
    `,

    image: `
      height:100px;
    `,

    resultLeft: `
    height: 100%;
      width: 40%;
      flex: 40%;
      display: inline-block;
      vertical-align: middle;
    `
  }
}