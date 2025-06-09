const layout = require('../layout')
const {getError} = require('../../helpers')

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="columns is-one-quarter">
            <form method="POST">
              <h1 class="title">Login</h1>
              <div class="field">
                <label class="label">Email</label>
                <input required class="input" placeholder="Email" name="email" />
                <p class="help is-danger">${getError(errors, 'email')}</p>
              </div>
              <div class="field">
                <label class="label">Password</label>  
                <input required class="input"  placeholder="Password" name="password" type="password" />
                <p class="help is-danger">${getError(errors, 'password')}</p>
              </div>
              <button class="button orange-btn">Submit</button>
            </form>
            <a href="/signup">Do not have an account? Sign Up</a>
          </div>
        </div>
      </div>    
    `
  })
}