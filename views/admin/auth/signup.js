const layout = require('../layout')
const {getError} = require('../../helpers')

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title">Register</h1>
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
              <div class="field">
                <label class="label">Confirm Password</label>  
                <input required class="input"  placeholder="Confirm Password" name="passwordConfirm" type="password" />
                <p class="help is-danger">${getError(errors, 'passwordConfirm')}</p>
              </div>
              <button class="button orange-btn">Submit</button>
            </form>
            <a href="/signin">Already have an account? Register</a>
          </div>
        </div>
      </div>    
    `
  })
}