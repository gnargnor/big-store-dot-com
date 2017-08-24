module.exports = (state, emitter) => {
  state.header = {
    storeName: 'BIG STORE',
    tagLine: 'welcome to "Big Store" (dot) com'
  }

  state.cats = [
    {name: "Moo", id: "moo"},
    {name: "Worm", id: "worm"},
    {name: "Party", id: "party"},
    {name: "Suki", id: "suki"},
    {name: "Ghost of Rufus", id: "rufus"},
    {name: "Sofia", id: "sofia"},
    {name: "Simon", id: "simon"},
  ]

  state.cat = null;
  state.catCart = [];
  state.noDeal = false;

  state.style = {
    layout: "padding: 20px 30px; width: 90%; margin: 0 auto; background: lightblue; border-radius: 30px 30px 0 0; font-family: 'Helvetica', sans-serif;",
    homepage: "color: blue;",
    navBar: "margin: 0 auto; background: white; border-radius: 6px;",
    navItem: "padding:5px 10px; display: inline-block; list-style: none;",
    header: "",
    headerH1: "font-size: 50px; margin: 0; padding-bottom: 0;",
    headerH2: "font-size: 30px; margin: 0; padding-left: 10px; padding-top: 5px;",
    catItem: "padding:5px 10px; display: inline-block; list-style: none; cursor: pointer;"
  }

  emitter.on('clickCats', () => {
    state.style.homepage = (state.style.homepage === "color: red;") ? "color: blue;" : "color: red;";
    emitter.emit('render');
  })

  emitter.on('clickOneCat', (catID) => {
    let singleCatArray = state.cats.filter((cat) => {
      return cat.id === catID;
    });
    state.cat = singleCatArray[0];

    emitter.emit('render');
  })

  emitter.on('addCatToCart', (catID) => {
    let duplicateCat = state.catCart.filter((cat) => {
      return cat.id === catID;
    });
    if (duplicateCat[0]) {
      let newCatCart = state.catCart.map((cat) => {
        if (cat.id === duplicateCat[0].id) {
          let newQty = cat.qty += 1;
          return Object.assign({}, cat, {qty: newQty});
        } else {
          return cat;
        }
      });
      state.catCart = newCatCart;
    } else {
      let newCat = state.cats.filter((cat) => {
        return cat.id === catID;
      })
      state.catCart.push({name: newCat[0].name, id: newCat[0].id, qty: 1});
    }

    console.log(state.catCart);
    emitter.emit('render');
  })
}