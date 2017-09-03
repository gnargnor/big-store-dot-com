const html = require('choo/html');

module.exports = (state, emit) => {
  
  function generateCart() {
    let cartInfo = state.bigStoreCart;
    console.log('cartInfo: ', cartInfo);
    return cartInfo.map(cartItem => {
      return html`
      <div style=${state.style.checkoutTableRow}>
        <div style=${state.style.checkoutTableItem}>
          ${cartItem.id}
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
    });
  }

  

  return html `
    <div>
      <div style=${state.style.checkoutTable}>
        <div style=${state.style.checkoutTableHeadItem}>Item</div>
        <div style=${state.style.checkoutTableHeadAvailability}>Availability</div>
        <div style=${state.style.checkoutTableHeadQuantity}>Quantity</div>
        <div style=${state.style.checkoutTableHeadPrice}>Price</div>
      </div> 
      ${generateCart()}
    </div>
  `
}