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
      margin: 10px auto;
      background: white;
      border-radius: 6px;`,

    navList: `
      margin: 0 auto;
      padding: 0;
      border-radius: 6px;`,

    navItem: `
      padding: 5px 0;
      display: inline-block;
      list-style: none;
      flex: 20%;
      width: 20%;
      text-align: center;`,

    navLink: `
      text-decoration: none;`,

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
      margin-left: 10px;`,

    searchButton: `
      margin-left: 10px;
      display: inline-block;`,

    row: `
      width: 100%;
      whitespace: normal;
      overflow: auto;
      height: auto;
      min-height: 200px;
      display: block;
      background: lightyellow;
      padding: 10px;
      margin-bottom: 6px;
      border-radius: 6px;`,

    resultRight: `
      float: left;
      height: 100%;
      width: 80%
      flex:80%;
      display: inline-block;
      text-align: left;
      vertical-align: top;
      padding: 0 10px;
      `,

    image: `
      height:200px;
      
      `,

    resultLeft: `
      float: left;
      height: 100%;
      width: 20%;
      flex: 20%;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
      text-align: center;`,

    clearFloat: `
      clear: both;`,
    
    floatingLineBreak: `
      content: \A;
      `
  }
}