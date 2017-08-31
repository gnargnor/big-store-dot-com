const html = require('choo/html');

module.exports = (state, emit) => {
  
  let generateCart = (state, emit) => {
    let cartInfo = state.bigStoreCart;
    console.log('cartInfo: ', cartInfo);
    return cartInfo.map(cartItem => {
      console.log('mapping ', cartItem.id, cartItem.quantity, cartItem.cost);
      return html `
      <div style=${state.style.checkoutTableRow}>
        <div style=${state.style.checkoutTableItem}>
          ${getCartItem(cartItem.id, emit)}
        </div>

        <div style=${state.style.checkoutTableAvailability}>
          stuff
        </div>

        <div style=${state.style.checkoutTableQuantity}>
         ${cartItem.quantity}
        </div>

        <div style=${state.style.checkoutTablePrice}>
          ${cartItem.cost}
        </div>
      </div>  
      `
    })
  }

  let getCartItem = (itemId, emit) => {
    console.log(itemId);
    emit('getCartItem', itemId);
  }

  return html `
    <div>
      <div style=${state.style.checkoutTable}>
        <div style=${state.style.checkoutTableHeadItem}>Item</div>
        <div style=${state.style.checkoutTableHeadAvailability}>Availability</div>
        <div style=${state.style.checkoutTableHeadQuantity}>Quantity</div>
        <div style=${state.style.checkoutTableHeadPrice}>Price</div>
      </div>
      ${generateCart(state, emit)}
    </div>
  `

}