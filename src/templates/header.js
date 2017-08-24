let html = require('choo/html');

module.exports = (state, emit) => {
  return html`
          <div class="homepage">
            <div style=${state.style.header}>
              <h1 style=${state.style.headerH1}>${state.header.storeName}</h1>
              <h2 style=${state.style.headerH2}>${state.header.tagLine}</h2>
            </div> 
            <div style=${state.style.navBar}>
              <ul>
                <li style=${state.style.navItem}><a href="/">Home</a></li>
                <li style=${state.style.navItem}><a href="/cats">Cats</a></li>
                <li style=${state.style.navItem}><a href="/shopping">Shopping</a></li>
                <li style=${state.style.navItem}><a href="/checkout">Checkout</a></li>
              </ul>
            </div>  
          </div>  
        `    
}