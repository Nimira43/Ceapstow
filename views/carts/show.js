const layout = require('../layout')

module.exports = ({ items }) => {
  let totalPrice = 0 
  for (let item of items) {
    totalPrice += item.quantity * item.product.price
  }
  const formattedTotal = totalPrice.toFixed(2);
  
  const renderedItems = items
    .map(item => {
      return `
        <div class="cart-item card">
          <h3 class="cart-item-title">
            ${item.product.title}
          </h3>
          <div class="cart-item-right">
            <div class="cart-item-calc">
              £${item.product.price} x ${item.quantity} =
            </div>

            <div class="cart-item-total">
              £${item.product.price * item.quantity}
            </div>

            <div class="cart-item-remove">
              
              <form 
                method="POST"
                action="/cart/products/delete"
              >
                <input 
                  hidden
                  value="${item.id}"
                  name="itemId" 
                />
                <button class="btn btn-dark btn-icon">
                  <i class="fas fa-times"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      `
    })
    .join('')

  return layout({
    content: `
      <section class="cart-section">
        <div class="cart-container">
          <h1 class="section-title centre-title">
            Shopping Cart
          </h1>
          <div class="cart-items">
            ${renderedItems}
          </div>
          <div class="cart-total card">
            <div class="cart-total-header">
              Total
            </div>
            <h1 class="cart-total-amount">
              £${formattedTotal}
            </h1>
            <button class="btn btn-orange btn-block">
              Buy
            </button>
          </div>
        </div>
      </section>
    `
  })
}

