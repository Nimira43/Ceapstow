const layout = require('../layout')
const {getError} = require('../../helpers')

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <input name="email" placeholder="Email" />
              ${getError(errors, 'email')}
              <input name="password" placeholder="Password" />
              ${getError(errors, 'password')}
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>    
    `
  })
}