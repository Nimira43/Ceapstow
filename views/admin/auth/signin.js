const layout = require('../layout')
const {getError} = require('../../helpers')

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class='container'>
        <div class='columns is-centered'>
          <div class='columns is-one-quarter'>
            <form method='POST'>
              <h1 class='title'>Login</h1>
              <div class='field'>
                <label class='label'>Email</label>
                <input required class='input' placeholder='Email' name='email' />
                <p class='help is-danger'>${getError(errors, 'email')}</p>
              </div>
              <div class='field'>
                <label class='label'>Password</label>  
                <input required class='input'  placeholder='Password' name='password' type='password' />
                <p class='help is-danger'>${getError(errors, 'password')}</p>
              </div>
              <button class='main-btn'>Submit</button>
              <p>Have no account?  
                <a href='/signup'>Register.</a>
              </p>
            </form>
          </div>
        </div>
      </div>    
    `
  })
}