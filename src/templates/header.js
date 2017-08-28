let html = require('choo/html');

module.exports = (state, emit) => {
  return html`
          <div class="homepage">
            <div style=${state.style.header}>
              <h1 style=${state.style.headerH1}>${state.header.storeName}</h1>
              <h2 style=${state.style.headerH2}>${state.header.tagLine}</h2>
            </div> 
            <div style=${state.style.navBar}>
              <ul style=${state.style.navList}>
                <li style=${state.style.navItem}><a href="/" style=${state.style.navLink}>Home</a></li>
                <li style=${state.style.navItem}><a href="/callcops" style=${state.style.navLink}>Call the Cops</a></li>
                <li style=${state.style.navItem}><a href="/shopping" style=${state.style.navLink}>Shopping</a></li>
                <li style=${state.style.navItem}><a href="/cats" style=${state.style.navLink}>Cats</a></li>
                <li style=${state.style.navItem}><a href="/checkout" style=${state.style.navLink}>Checkout</a></li>
              </ul>
            </div>  
          </div>  
        `    
}