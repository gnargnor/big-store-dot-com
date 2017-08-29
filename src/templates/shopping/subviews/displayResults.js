const html = require('choo/html');

module.exports = (state) => {
  let formatPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
  let searchResults = state.searchResults;
  let parsedDetails = state.parsedDetails;
  console.log('parsedDetails ', parsedDetails);
  return parsedDetails.map(result => {
    let generalProperties = result.generalProperties;
    let typeDetails = result.typeDetails;
    let type = typeDetails.type;
    return html`
    <div style=${state.style.row}>
      <div style=${state.style.resultLeft}>
        ${displayImage(generalProperties)}
      </div>
        ${displayType(result, typeDetails, generalProperties)}
      <div style=${state.style.clearFloat}></div>
    </div>
    `
  });

  function displayImage(generalProperties) {
    if (!generalProperties.image) {
      return html`
        <div style=${state.style.noImage}>
          <p>NO IMAGE AVAILABLE</p>
        </div>
      `
    } else {
      return html`
        <img src=${generalProperties.image} style=${state.style.image} />
      `
    }
  }

  function displayType(result, typeDetails, generalProperties) {
    console.log(typeDetails.type);
    switch (typeDetails.type) {
      case 'Music':
        return displayMusic(result, typeDetails, generalProperties);
      case 'Movie':
        return displayMovie(result, typeDetails, generalProperties);
      case 'HardGood':
        return displayHardGood(result, typeDetails, generalProperties);
      case 'Game':
        return displayGame(result, typeDetails, generalProperties);
      case 'BlackTie':
        return displayBlackTie(result, typeDetails, generalProperties);
      case 'Software':
        return displaySoftware(result, typeDetails, generalProperties);
      case 'Bundle':
        return displayBundle(result, typeDetails, generalProperties);
      default:
        return displayDefault(result, typeDetails, generalProperties);
    }

  }

  function displayMusic(result, typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <div style=${state.style.rightSide}>
          <div style=${state.style.descriptionLeft}>
            <div style=${state.style.descriptionTopLeft}>
              <p style=${state.style.artist}>${typeDetails.artist}</p>
              <p style=${state.style.productName}>${typeDetails.productName}</p>
              <p style=${state.style.format}>${typeDetails.format}</p>
            </div>
            <div style=${state.style.descriptionBottomLeft}>
              <div style=${state.style.addToCart}>
                <button id=${result.id} style=${state.style.addToCartButton} onclick=${addToCart}>Add To Cart</button><br />
                <span style=${state.style.label}>qty:</span>
                <select id=${result.id} onchange=${setQuantity}>
                  ${generateQtyDropdown(result.id)}
                </select>
              </div>
            </div>
          </div>
          <div style=${state.style.descriptionRight}>
            <div style=${state.style.descriptionTopRight}>
              <p style=${state.style.studio}>${typeDetails.label}</p>
              <p style=${state.style.genre}><span style=${state.style.label}>genre:</span>${typeDetails.genre}</p>
            </div>
            <div style=${state.style.descriptionBottomRight}>
              <p style=${state.style.label}>Regular Price: <span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
              <p style=${state.style.label}>Sale Price: <span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice * 1.2)}</span></p>
            </div>
          </div>
        </div>
      </div>
    `
  }

  function generateAddToCart(){
    /** put the code that will replace the wonkiness below here */
  }

  function addToCart(e) {
    let targetId = Number(e.target.id);
    state.qtyById.map(product => {
      if (product.id === targetId) {
        state.bigStoreCart.push(product);
        return;
      } else {
        return;
      }
    });
    console.log(state.bigStoreCart);
  }

  function generateQtyDropdown(id) {
    let qtyArray = [1,2,3,4,5,6,7,8,9,10];
    return qtyArray.map(qty => {
      return html`
        <option id=${id} value=${qty}>${qty}</option>
      `
    })
  }

  function setQuantity(e) {
    let targetId = Number(this.id);
    let newQty = Number(e.target.value);
    let newState = state.qtyById.map(product => {
      if (product.id === targetId) {
        product.qty = newQty;
        return product;
      } else {
        return product;
      }
    })
    state.qtyById = newState;
    console.log(state.qtyById);
  }

  function displayMovie(typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <p style=${state.style.productName}>${typeDetails.productName}</p>
        <p style=${state.style.format}>${typeDetails.format}</p>
        <p style=${state.style.label}>${typeDetails.studio}</p>
        <p style=${state.style.releaseDate}><span style=${state.style.label}>released:</span>${typeDetails.releaseDate}</p>
        <p style=${state.style.label}>Regular Price: <span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
        <p style=${state.style.label}>Sale Price: <span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice * 1.2)}</span></p>
      </div>
    `
  }

  function displayHardGood(typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <p style=${state.style.brand}>${typeDetails.brand}</p>
        <p style=${state.style.productName}>${typeDetails.productName}</p>
        <p style=${state.style.color}><span style=${state.style.label}>color:</span>${typeDetails.color}</p>
        <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
        <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice * 1.2)}</span></p>
      </div>  
    `
  }

  function displayGame(typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <p style=${state.style.productName}>${generalProperties.name}</p>
        <p style=${state.style.studio}>${typeDetails.brand}</p>
        <p style=${state.style.genre}><span style=${state.style.label}>genre:</span>${typeDetails.genre}</p>
        <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
        <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice * 1.2)}</span></p>
      </div>
    `
  }

  function displayBlackTie(typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <p style=${state.style.brand}>${typeDetails.brand}</p>
        <p style=${state.style.productName}>${typeDetails.productName}</p>
        <p style=${state.style.genre}><span style=${state.style.label}>plan type:</span>${typeDetails.planType}</p>
        <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
        <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice * 1.2)}</span></p>
      </div>
    `
  }

  function displaySoftware(typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <p style=${state.style.brand}>${typeDetails.brand}</p>
        <p style=${state.style.productName}>${typeDetails.productName}</p>
        <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
        <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice * 1.2)}</span></p>
      </div>
  `
  }

  function displayBundle(typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <p style=${state.style.productName}>${typeDetails.productName}</p>
        <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
        <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice * 1.2)}</span></p>
      </div>
  `
  }

  function displayDefault(typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <p style=${state.style.productName}>${typeDetails.productName}</p>
        <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
        <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice * 1.2)}</span></p>
      </div>
    `
  }
}