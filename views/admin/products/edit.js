// ADMIN - EDIT

const { getError } = require('../../helpers')  
const layout = require('../layout')

module.exports = ({ product, errors }) => {
  return layout ({
    content: `
      <div class="admin-form-wrapper">
        <div class="admin-form-card">
          <h1 class="admin-form-title">Edit Product</h1>

          <form
            method='POST'
            enctype='multipart/form-data'
            class="admin-form"
          >
            <div class="form-group">
              <label class="form-label">Product</label>
              <input
                name='title'
                value="${product.title}"
                class="form-input"
              />
              <p class="form-error">
                ${getError(errors, 'title')}
              </p>
            </div>  

            <div class="form-group">
              <label class="form-label">Price</label>
              <input
                name='price'
                value="${product.price}"
                class="form-input"
              />
              <p class="form-error">
                ${getError(errors, 'price')}
              </p>
            </div>  

            <div class="form-group">
              <label class="form-label">Image</label>
              <input
                type='file'
                name='image'
                class="form-input"
              />
            </div>  

            <button class="btn admin-btn-submit">Submit</button>
          </form>
        </div>
      </div>   
    `
  })
}


