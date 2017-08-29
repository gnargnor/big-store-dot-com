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
      background: #003b64;
      height: 100%;
      padding: 20px 30px;`,

    homepageContainer: `
      max-width: 1008px;
      margin: 0 auto;
    `,

    header: `
      padding: 10px 30px;
      max-width: 1008px;
      margin: 0 auto;
    `,

    navBar: `
      background: #002e4e;
      margin`,

    navList: `
      max-width: 1008px;
      margin: 0 auto;
      padding: 5px 0;`,

    navItem: `
      padding: 5px 0;
      display: inline-block;
      list-style: none;
      flex: 20%;
      width: 20%;
      font-size: 14px;
      text-align: center;`,

    navLink: `
      text-decoration: none;
      color: white;
      `,
    
    navBreak: `
      background: white;
      height: 4px;
    `,

    headerH1: `
      font-size: 36px;
      margin: 0;
      padding-bottom: 0;`,

    headerP: `
      font-size: 13px;
      font-style: italic;
      margin: 0;
      padding-bottom: 8px;
      padding-left: 2px;`,

    catNav: `
      margin: 0;
      padding: 12px 0;
      background: lightgrey;
    `,

    catNavContainer: `
      max-width: 1008px;
      margin: 0 auto;
    `,
      
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
      background: white;
      color: #002e4e;
      width:50%;`,

    catShoppingRight: `
      display: inline-block;
      float: left;
      padding: 10px 0px;
      background: white;
      color: #002e4e;
      width: 50%;`,

    shopping: `
      background: white;
      
    `,

    shoppingContainer: `
      max-width: 1008px;
      padding: 0 30px;
      margin: 0 auto;
      color: #003b64;
    `,

    searchBar: `
      padding: 16px 0;
      background: lightgrey;
      margin: 0;
      color: #003b64;
    `,

    searchBarContainer: `
      max-width: 1008px;
      margin: 0 auto;
    `,

    searchInput: `
      margin-left: 10px;
      width: 200px;`,

    dropdown: `
      margin-left: 10px;`,

    searchButton: `
      margin-left: 10px;
      display: inline-block;`,

    searchTerm: `
      font-size: 28px;
    `,

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
      `,

    checkout: `
      background: white;
    `,

    checkoutContainer: `
      max-width: 1008px;
      margin: 0 auto;
      color: #002e4e;
    `,

    cart: `
      margin: 10px auto;
      padding: 10px;
      background: #aae0ec;
      color: black;
      height: auto;
      min-height: 200px;
    `,

    callCops: `
      background: white;
    `,

    callCopsContainer: `
      max-width: 1008px;
      margin: 0 auto;
      color: #002e4e;
    `
  }
}