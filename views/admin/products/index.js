const layout = require('../layout')

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return (`
        <tr>
          <td>${product.title}</td>
          <td>£${product.price}</td>
          <td>
            <a href=''>
              <button class='main-btn is-link'>
                Edit
              </button>
            </a>
          </td>
          <td>
            <button 
              class='main-btn'
            >
              Delete
            </button>
          </td>
        </tr>
      `)
    })
    .join('')


  return layout({
    content: `
      <div class='products-header'>
        <h1 class='title'>Products</h1>
        <a
          href='/admin/products/new'
          class='main-btn' 
        >New Product</a>
      </div>
      <table class='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          ${renderedProducts}
        </tbody>
      </table>
    `
  })
}