const layout = require('../layout')
const {getError} = require('../../helpers')

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div>
        <h1>Ceapstow Wholesalers</h1>
        <h2>Login</h2>
        <form method="POST">
          <input name="email" placeholder="Email" />
          ${getError(errors, 'email')}
          <input name="password" placeholder="Password" />
          ${getError(errors, 'password')}
          <button>Login</button>
        </form>
      </div>    
    `
  })
}