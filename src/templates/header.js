let html = require('choo/html');

module.exports = (state, emit) => {
  return html`
          <div class="header">
            <div style=${state.style.header}>
              <p style=${state.style.headerP}>${state.header.tagLine}</p>
              <h1 style=${state.style.headerH1}>${state.header.storeName}</h1>
            </div> 
            <div style=${state.style.navBar}>
              <ul style=${state.style.navList}>
                <li style=${state.style.navItem}><a href="/" style=${state.style.navLink}>HOME</a></li>
                <li style=${state.style.navItem}><a href="/shopping" style=${state.style.navLink}>SHOPPING</a></li>
                <li style=${state.style.navItem}><a href="/cats" style=${state.style.navLink}>CATS</a></li>
                <li style=${state.style.navItem}><a href="/checkout" style=${state.style.navLink}>CHECKOUT</a></li>
                <li style=${state.style.navItem}><a href="/callcops" style=${state.style.navLink}>CALL THE COPS</a></li>
              </ul>
            </div>
            <div style=${state.style.navBreak}></div>  
          </div>  
        `    
}