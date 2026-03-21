// ADMIN INDEX

const layout = require('../layout')

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
        <tr class="admin-row">
          <td class="admin-cell">${product.title}</td>
          <td class="admin-cell">£${product.price}</td>
          <td class="admin-cell">
            <a href="/admin/products/${product.id}/edit" class="btn admin-btn admin-btn-edit">
              Edit
            </a>
          </td>
          <td class="admin-cell">
            <form method="POST" action="/admin/products/${product.id}/delete">
              <button class="btn admin-btn admin-btn-delete">Delete</button>
            </form>
          </td>
        </tr>
      `
    })
    .join('')

  return layout({
    content: `
      <div class="admin-header-bar">
        <h1 class="admin-title">Products</h1>
        <a href="/admin/products/new" class="btn admin-btn admin-btn-new">New Product</a>
      </div>

      <table class="admin-table">
        <thead>
          <tr>
            <th class="admin-th">Title</th>
            <th class="admin-th">Price</th>
            <th class="admin-th">Edit</th>
            <th class="admin-th">Delete</th>
          </tr>
        </thead>
        <tbody>
          ${renderedProducts}
        </tbody>
      </table>
    `
  })
}
