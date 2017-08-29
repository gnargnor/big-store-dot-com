module.exports = (state, emitter) => {
  state.style = {
    /** pages */
    layout: `
      margin: 0 auto;
      background: #003b64;
      color: white;
      font-family: 'Arial', 'Helvetica', sans-serif;`,

    homepage: `
      color: white;
      height: 100%;
      min-height: 500px;
      padding: 20px 30px;`,

    header: `
      padding: 20px 30px;
      max-width: 1008px;
      margin: 0 auto;
    `,

    navBar: `
      background: #002e4e;
      margin`,

    navList: `
      max-width: 1008px;
      margin: 0 auto;
      padding: 0;`,

    navItem: `
      padding: 5px 0;
      display: inline-block;
      list-style: none;
      flex: 20%;
      width: 20%;
      text-align: center;`,

    navLink: `
      text-decoration: none;
      color: white;`,
    
    navBreak: `
      background: white;
      height: 4px;
    `,

    headerH1: `
      font-size: 36px;
      margin: 0;
      padding-bottom: 0;`,

    headerH2: `
      font-size: 14px;
      margin: 0; padding-left: 10px;
      padding-top: 5px;`,
      
    catItem: `
      padding:5px 10px;
      display: inline-block;
      list-style: none;
      cursor: pointer;`,

    catShopping: `
      background: white;
      color: #003b64;
    `,

    catShoppingContainer: `
      height: auto;
      min-height: 500px;
      background: white;
      max-width: 1008px;
      margin: 0 auto;
      `,

    catH3: `
      margin-left: 5%;
    `,

    catShoppingLeft: `
      display: inline-block;
      float: left;
      padding: 10px 0;
      background: #002e4e;
      color: white;
      width:50%;`,

    catShoppingRight: `
      display: inline-block;
      float: left;
      padding: 10px 0px;
      background: #002e4e;
      color: white;
      width: 50%;`,

    shopping: `
      background: white;
      
    `,

    shoppingContainer: `
      max-width: 1008px;
      padding: 20px 30px;
      margin: 0 auto;
      color: #003b64;
    `,

    searchBar: `
      text-align: center;
    `,

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
      background: white;
      color: black;
      margin: 0 auto;
      padding: 10px;
      border-bottom: 1px solid grey;`,

    resultLeft: `
      float: left;
      height: 100%;
      width: 30%;
      flex: 30%;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
      text-align: center;`,

    image: `
      height:200px;
      
      `,

    resultRight: `
      float: left;
      height: 100%;
      width: 70%
      flex:70%;
      display: inline-block;
      text-align: left;
      vertical-align: top;
      padding: 0 10px;
      `,

    clearFloat: `
      clear: both;`,
    
    floatingLineBreak: `
      content: \A;
      `
  }
}