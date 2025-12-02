const layout = require('../layout')
const { getError } = require('../../helpers')

module.exports = ({ errors }) => {
  return layout ({
    content: `
      <div class='columns is-centered'>
        <div class='column is-half'>
          <h1 class='title'>Create New Product</h1>
          <form 
            method='POST'
            enctype='multipart/form-data'
          >
            <div class='field'>
              <label class='label'>Title</label>
              <input class='input' name='title' />
              <p class='help is-danger'>
                ${getError(errors, 'title')}
              </p>
            </div>
            <div class='field'>
              <label class='price'>Price</label>
              <input class='input' name='price' />
              <p class='help is-danger'>
                ${getError(errors, 'price')}
              </p>
            </div>
            <div class='field'>
              <label class='label'>Image</label>
              <input type='file' name='image' />
            </div>
            <br />
            <button class='main-btn'>Submit</button>
          </form>
        </div>
      </div>      
    `
  })
}