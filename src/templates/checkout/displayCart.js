const html = require('choo/html');

module.exports = (state, emit) => {
  
  let generateCart = (state, emit) => {
    let cartInfo = state.bigStoreCart;
    console.log('cartInfo: ', cartInfo);
    cartInfo.map(cartItem => {
      console.log('mapping ', cartItem.id, cartItem.quantity, cartItem.price);
      return html `
      <div>
        <div style=${state.style.checkoutTableItem}>
          <p>${cartItem.id}</p>
        </div>

        <div style=${state.style.checkoutTableAvailability}>
          <p>stuff</p>
        </div>

        <div style=${state.style.checkoutTableQuantity}>
         <p>${cartItem.quantity}</p>
        </div>

        <div style=${state.style.checkoutTablePrice}>
          <p>${cartItem.cost}</p>
        </div>
      </div>  
      `
    })
    
  }

  return html `
    <div style=${state.style.checkoutTable}>
      <div style=${state.style.checkoutTableHeadItem}>Item</div>
      <div style=${state.style.checkoutTableHeadAvailability}>Availability</div>
      <div style=${state.style.checkoutTableHeadQuantity}>Quantity</div>
      <div style=${state.style.checkoutTableHeadPrice}>Price</div>
      ${generateCart(state, emit)}
    </div>
  `

  


}