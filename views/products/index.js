// PRODUCTS INDEX

const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
        <div class="product-card">
          <figure class="product-image">
            <img src="data:image/png;base64, ${product.image}" />
          </figure>

          <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <h5 class="product-price">$${product.price}</h5>
          </div>

          <div class="product-actions">
            <form action="/cart/products" method="POST">
              <button class="btn add-to-cart">
                Add to cart
              </button>
            </form>
          </div>
        </div>
      `
    })
    .join('\n')

  return layout({
    content: `
      <section class="products-section">
        <div class="products-container">
          <h2 class="section-title">Featured Items</h2>

          <div class="products-grid">
            ${renderedProducts}
          </div>
        </div>
      </section>
    `
  })
}
