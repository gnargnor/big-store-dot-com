let findInArray = require('../helpers/findInArray');

module.exports = (catID, state, emitter) => {
  let existingCat = findInArray(catID, state.catCart);    
  
  if (existingCat) {

    let newCatCart = state.catCart.map((cat) => {
      if (cat.id === existingCat.id) {
        let newQty = cat.qty += 1;
        return Object.assign(
          {},
          cat,
          {qty: newQty}
        );
      } else {
        return cat;
      }
    });
    state.catCart = newCatCart;

  } else {

    let newCat = findInArray(catID, state.cats);
    state.catCart.push({
      name: newCat.name,
      id: newCat.id,
      qty: 1}
    );
  }

  emitter.emit('render');
}
