// ADMIN - NEW

const layout = require('../layout')
const { getError } = require('../../helpers')

module.exports = ({ errors }) => {
  return layout ({
    content: `
      <div class="admin-form-wrapper">
        <div class="admin-form-card">
          <h1 class="admin-form-title">Create New Product</h1>

          <form 
            method='POST'
            enctype='multipart/form-data'
            class="admin-form"
          >
            <div class="form-group">
              <label class="form-label">Title</label>
              <input name='title' class="form-input" />
              <p class="form-error">
                ${getError(errors, 'title')}
              </p>
            </div>

            <div class="form-group">
              <label class="form-label">Price</label>
              <input name='price' class="form-input" />
              <p class="form-error">
                ${getError(errors, 'price')}
              </p>
            </div>

            <div class="form-group">
              <label class="form-label">Image</label>
              <input name='image' class="form-input" />
            </div>

            <button class="btn btn-orange btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>      
    `
  })
}
