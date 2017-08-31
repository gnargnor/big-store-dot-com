module.exports = (state, emitter) => {
  state.style = {
    /** pages */
    layout: `
      margin: 0 auto;
      background: #003b64;
      color: white;
      font-family: 'Arial', 'Helvetica', sans-serif;`,

    homepage: `
      background: white;
      color: red;`,

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
      white-space: normal;
      overflow: auto;
      height: auto;
      min-height: 200px;
      display: flex;
      justify-content: center;
      align-content: center;
      background: white;
      color: black;
      margin: 0 auto;
      padding: 10px;
      border-bottom: 1px solid grey;`,

    resultLeft: `
      order: 1;
      height: auto;
      min-height: 200px;
      line-height: 200px;
      width: 40%;
      flex: 1 1 40%;
      overflow: hidden;
      text-align: center;
      align-items: center;
      `,


    image: `
      height:200px;
      align-self: center;
      vertical-align: middle;
      margin: 10px;
      `,
    
    noImage: `
      height: 200px;
      width: 200px;
      line-height: 200px;
      border: 1px solid black;
      text-align: center;
      margin: 0 auto;
    `,

    noImageText: `
      display: inline-block;
      vertical-align: middle;
      line-height: normal;
    `,

    resultRight: `
      order: 2;
      height: auto;
      min-height: 200px;
      width: 60%;
      flex: 1 1 60%;
      padding: 0;
    `,

    rightSide: `
      display: flex;
      justify-content: space-evenly;
      align-items: stretch;
      margin: 10px;
    `,

    descriptionLeft: `
      order: 1;
      flex: 1 1 65%;
      height: 100%;
      min-height: 200px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;

    `,

    descriptionTopLeft: `
      order: 1;

    `,

    descriptionBottomLeft: `
      order: 2;

    `,

    descriptionRight: `
      order: 2;
      flex: 1 1 35%;
      height: 100%;
      min-height: 200px;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    `,

    descriptionTopRight: `
      order:1;

    `,

    descriptionBottomRight: `
      order: 2;
      align-items: flex-end;
      text-align: right;
    `,

    addToCart: `
      flex 1 1 100%;
      text-align: right;
      self-align: flex-end;
      padding: 5px 0 0
    `,

    addToCartButton: `
      font-size: 13px;
      font-weight: bold;
      padding: 6px 24px;
      color: #474747;
      border-color: #f2ca00;
      background-color: #ffd500;
      border-radius: 4px;
      background-image: linear-gradient(180deg,#ffd500 0,#fff200 33%,#fff200 67%,#ffd500 100%);
      background-size: 100% 300%;
      background-position: 0 100%;
    `,
    
    productName: `
      font-size: 18px;
      font-weight: bold;
      margin: 5px 0 5px;
      padding: 0;
    `,

    label: `
      font-size: 12px;
      margin: 0 5px 0;
      padding: 0;
    `,

    format: `
      font-size: 16px;
      font-style: none;
    `,

    studio: `
      font-size: 12px;
    `,

    price: `
      font-size: 16px;
      text-decoration: line-through;
      margin: 0;
      padding: 0;
    `,

    salePrice: `
      font-size: 24px;
      font-weight: bolder;
      margin: 0;
      padding: 0;
    `,

    artist: `
      font-size: 24px;
      font-weight: bolder;
      margin: 4px 0;
    `,

    genre: `
      font-size: 18px;
    `,

    brand: `
      font-size: 20px;
    `,

    releaseDate: `
      font-size: 14px;
    `,

    clearFloat: `
      clear: both;`,
    
    floatingLineBreak: `
      white-space: pre-wrap;
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

    checkoutHeader: `
      font-size: 32px;
    `,

    checkoutTable: `
      display: flex;
      flex-wrap: wrap;
    `,

    checkoutTableHeadItem: `
      box-sizing: border-box;
      flex-grow: 1;  
      font-size: 12px;
      width: 40%;
      padding: 5px;
      border: 1px solid black;
    `,

    checkoutTableHeadAvailability: `
      box-sizing: border-box;
      flex-grow: 1;  
      font-size: 12px;
      width: 30%;
      padding: 5px;
      border: 1px solid black;
    `,

    checkoutTableHeadQuantity: `
      box-sizing: border-box;
      flex-grow: 1;  
      font-size: 12px;
      width: 20%;
      padding: 5px;
      border: 1px solid black;
    `,

    checkoutTableHeadPrice: `
      box-sizing: border-box;
      flex-grow: 1;  
      font-size: 12px;
      width: 10%;
      padding: 5px;
      border: 1px solid black;
    `,

    checkoutTableItem: `
      box-sizing: border-box;
      flex-grow: 1;
      width: 40%;
      border: 1px solid red;
    `,

    checkoutTableAvailability: `
      box-sizing: border-box;
      flex-grow: 1;
      width: 30%;
      border: 1px solid red;
    `,

    checkoutTableQuantity: `
      box-sizing: border-box;
      flex-grow: 1;
      width: 20%;
      border: 1px solid red;
    `,

    checkoutTablePrice: `
      box-sizing: border-box;
      flex-grow: 1;
      width: 10%;
      border: 1px solid red;
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