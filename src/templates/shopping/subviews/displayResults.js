const html = require('choo/html');

module.exports = (state) => {
  let formatPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
  // let searchResults = state.searchResults;
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
          <span style=${state.style.noImageText}>NO IMAGE AVAILABLE</span>
        </div>
      `
    } else {
      return html`
        <img src=${generalProperties.image} style=${state.style.image} />
      `
    }
  }

  function generateAddToCart(result){
    this.result = result;
    let id = this.result.id;
    let price = this.result.generalProperties.salePrice;
    
    let quantitySelected = 1;
    let cost = price * quantitySelected;

    let addToCart = () => {
      let newCartItem = {id: this.result.id}
      console.log('qty: ', quantitySelected);
      let targetId = this.result.id;
      console.log('targetId: ', targetId);
      newCartItem.quantity = quantitySelected;
      newCartItem.cost = cost;
      state.bigStoreCart.push(newCartItem);
      console.log(state.bigStoreCart);
    }

    let generateQtyDropdown = () => {
      let qtyArray = [1,2,3,4,5];
      return qtyArray.map(qtyOption => {
        if (qtyOption === quantitySelected) {
          return html `<option value=${qtyOption} selected>${qtyOption}</option>`;
        } else {
          return html `<option value=${qtyOption}>${qtyOption}</option>`;
        }
      })
    }

    let setQuantity = (e) => {
      let newQuantity = Number(e.target.value);
      quantitySelected = newQuantity;
      cost = price * quantitySelected;
    }

    return html`
      <div style=${state.style.addToCart}>
        <button style=${state.style.addToCartButton} onclick=${addToCart}>Add To Cart</button><br />
        <span style=${state.style.label}>qty:</span>
        <select id=${result.id} onchange=${setQuantity}>
          ${generateQtyDropdown()}
        </select>
      </div>
    `
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
              <p style=${state.style.productName}>${typeDetails.productName}</p>
              <p style=${state.style.artist}>${typeDetails.artist}</p>
            </div>
            <div style=${state.style.descriptionBottomLeft}>
              <p style=${state.style.format}>${typeDetails.format}</p>
              <p style=${state.style.studio}>${typeDetails.label}</p>
              <p style=${state.style.label}>genre:<span style=${state.style.genre}>${typeDetails.genre}</span></p>
            </div>
          </div>
          <div style=${state.style.descriptionRight}>
            <div style=${state.style.descriptionTopRight}>
            </div>
            <div style=${state.style.descriptionBottomRight}>
              <p style=${state.style.label}>was:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
              <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice * 1.2)}</span></p>
              ${generateAddToCart(result)}
            </div>
          </div>
        </div>
      </div>
    `
  }

  function displayMovie(result, typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <div style=${state.style.rightSide}>
          <div style=${state.style.descriptionLeft}>
            <div style=${state.style.descriptionTopLeft}>
              <p style=${state.style.productName}>${typeDetails.productName}</p>
              <p style=${state.style.label}>format:<span style=${state.style.format}>${typeDetails.format}</span></p>
            </div>
            <div style=${state.style.descriptionBottomLeft}>
              <p style=${state.style.studio}>${typeDetails.studio}</p>
              <p style=${state.style.releaseDate}><span style=${state.style.label}>released:</span>${typeDetails.releaseDate}</p>
            </div>
          </div>
          <div style=${state.style.descriptionRight}>
            <div style=${state.style.descriptionTopRight}>
            </div>
            <div style=${state.style.descriptionBottomRight}>
              <p style=${state.style.label}>was:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice)}</span></p>
              <p style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice)}</p>
              ${generateAddToCart(result)}
            </div>
          </div>
        </div>
      </div>
    `
  }

  function displayHardGood(result, typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <div style=${state.style.rightSide}>
          <div style=${state.style.descriptionLeft}>
            <div style=${state.style.descriptionTopLeft}>
              <p style=${state.style.productName}>${typeDetails.productName}</p>
              <p style=${state.style.brand}>${typeDetails.brand}</p>
            </div>
            <div style=${state.style.descriptionBottomLeft}>
              <p style=${state.style.color}><span style=${state.style.label}>color:</span>${typeDetails.color}</p>
            </div>
          </div>
          <div style=${state.style.descriptionRight}>
            <div style=${state.style.descriptionTopRight}>
            </div>
            <div style=${state.style.descriptionBottomRight}>
              <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice)}</span></p>
              <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice)}</span></p>
              ${generateAddToCart(result)}
            </div>
          </div>
        </div>
      </div>
    `
  }

  function displayGame(result, typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <div style=${state.style.rightSide}>
          <div style=${state.style.descriptionLeft}>
            <div style=${state.style.descriptionTopLeft}>
              <p style=${state.style.productName}>${generalProperties.name}</p>
              <p style=${state.style.studio}>${typeDetails.brand}</p>
            </div>
            <div style=${state.style.descriptionBottomLeft}>
              <p style=${state.style.genre}><span style=${state.style.label}>genre:</span>${typeDetails.genre}</p>
            </div>
          </div>
          <div style=${state.style.descriptionRight}>
            <div style=${state.style.descriptionTopRight}>
            </div>
            <div style=${state.style.descriptionBottomRight}>
              <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice)}</span></p>
              <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice)}</span></p>
              ${generateAddToCart(result)}
            </div>
          </div>
        </div>
      </div>
    `
  }

  function displayBlackTie(result, typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <div style=${state.style.rightSide}>
          <div style=${state.style.descriptionLeft}>
            <div style=${state.style.descriptionTopLeft}>
              <p style=${state.style.productName}>${typeDetails.productName}</p>
              <p style=${state.style.brand}>${typeDetails.brand}</p>
            </div>
            <div style=${state.style.descriptionBottomLeft}>
              <p style=${state.style.genre}><span style=${state.style.label}>plan type:</span>${typeDetails.planType}</p>
            </div>
          </div>
          <div style=${state.style.descriptionRight}>
            <div style=${state.style.descriptionTopRight}>
            </div>
            <div style=${state.style.descriptionBottomRight}>
              <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice)}</span></p>
              <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice)}</span></p>
              ${generateAddToCart(result)}
            </div>
          </div>
        </div>
      </div>
    
    `
  }

  function displaySoftware(result, typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <div style=${state.style.rightSide}>
          <div style=${state.style.descriptionLeft}>
            <div style=${state.style.descriptionTopLeft}>
              <p style=${state.style.productName}>${typeDetails.productName}</p>
              <p style=${state.style.brand}>${typeDetails.brand}</p>
            </div>
            <div style=${state.style.descriptionBottomLeft}>
            </div>
          </div>
          <div style=${state.style.descriptionRight}>
            <div style=${state.style.descriptionTopRight}>
            </div>
            <div style=${state.style.descriptionBottomRight}>
              <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice)}</span></p>
              <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice)}</span></p>
              ${generateAddToCart(result)}
            </div>
          </div>
        </div>
      </div>
    
  `
  }

  function displayBundle(result, typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <div style=${state.style.rightSide}>
          <div style=${state.style.descriptionLeft}>
            <div style=${state.style.descriptionTopLeft}>
            <p style=${state.style.productName}>${typeDetails.productName}</p>
            </div>
            <div style=${state.style.descriptionBottomLeft}>
            </div>
          </div>
          <div style=${state.style.descriptionRight}>
            <div style=${state.style.descriptionTopRight}>
            </div>
            <div style=${state.style.descriptionBottomRight}>
              <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice)}</span></p>
              <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice)}</span></p>
              ${generateAddToCart(result)}
            </div>
          </div>
        </div>
      </div>
  `
  }

  function displayDefault(result, typeDetails, generalProperties) {
    return html`
      <div style=${state.style.resultRight}>
        <div style=${state.style.rightSide}>
          <div style=${state.style.descriptionLeft}>
            <div style=${state.style.descriptionTopLeft}>
            <p style=${state.style.productName}>${typeDetails.productName}</p>
            </div>
            <div style=${state.style.descriptionBottomLeft}>
            </div>
          </div>
          <div style=${state.style.descriptionRight}>
            <div style=${state.style.descriptionTopRight}>
            </div>
            <div style=${state.style.descriptionBottomRight}>
              <p style=${state.style.label}>Regular Price:<span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice)}</span></p>
              <p style=${state.style.label}>Sale Price:<span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice)}</span></p>
              ${generateAddToCart(result)}
            </div>
          </div>
        </div>
      </div>
    `
  }
}