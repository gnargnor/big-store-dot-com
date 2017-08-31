<div style=${state.style.resultRight}>
  <div style=${state.style.rightSide}>
    <div style=${state.style.descriptionLeft}>
      <div style=${state.style.descriptionTopLeft}>
      </div>
      <div style=${state.style.descriptionBottomLeft}>
      </div>
    </div>
    <div style=${state.style.descriptionRight}>
      <div style=${state.style.descriptionTopRight}>
      </div>
      <div style=${state.style.descriptionBottomRight}>
      </div>
    </div>
  </div>
</div>

<div style=${state.style.resultRight}>
  <div style=${state.style.rightSide}>
    <div style=${state.style.descriptionLeft}>
      <div style=${state.style.descriptionTopLeft}>
        <p style=${state.style.artist}>${typeDetails.artist}</p>
        <p style=${state.style.productName}>${typeDetails.productName}</p>
        <p style=${state.style.format}>${typeDetails.format}</p>
      </div>
      <div style=${state.style.descriptionBottomLeft}>
        ${generateAddToCart(result)}
      </div>
    </div>
    <div style=${state.style.descriptionRight}>
      <div style=${state.style.descriptionTopRight}>
        <p style=${state.style.studio}>${typeDetails.label}</p>
        <p style=${state.style.genre}><span style=${state.style.label}>genre:</span>${typeDetails.genre}</p>
      </div>
      <div style=${state.style.descriptionBottomRight}>
        <p style=${state.style.label}>was: <span style=${state.style.price}>${formatPrice.format(generalProperties.regularPrice * 1.3)}</span></p>
        <p style=${state.style.label}>Sale Price: <span style=${state.style.salePrice}>${formatPrice.format(generalProperties.salePrice * 1.2)}</span></p>
      </div>
    </div>
  </div>
</div>
          