const { getError } = require('../../helpers')  
const layout = require('../layout')

module.exports = ({ product, errors }) => {
  return layout ({
    content: `
      <div class='columns is-centered'>
        <div class='column is-half'>
          <h1 class='title'>Edit Product</h1>
          <form
            method='POST'
            enctype='multipart/form-data'
          >
            <div class='field'>
              <label class='label'>Product</label>
              <input
                class='input'
                name='title'
                value="${product.title}"
              />
              <p class='help is-danger'>
                ${getError(errors, 'title')}
              </p>
            </div>  
            <div class='field'>
              <label class='label'>Price</label>
              <input
                class='input'
                name='price'
                value="${product.price}"
              />
              <p class='help is-danger'>
                ${getError(errors, 'price')}
              </p>
            </div>  
            <div class='field'>
              <label class='label'>Image</label>
              <input
                type='file'
                name='image'
              />
            </div>  
            <br />
            <button class='main-btn'>Submit</button>
          </form>
        </div>
      </div>   
    `
  })
}

