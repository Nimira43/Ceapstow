const layout = require('../layout')
const {getError} = require('../../helpers')

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div>
        <h4>Your ID is ${req.session.userId}</h4> 
        <h1>Ceapstow Wholesalers</h1>
        <h2>Register</h2>
        <form method="POST">
          <input name="email" placeholder="Email" />
          ${getError(errors, 'email')} 
          <input name="password" placeholder="Password" />
          ${getError(errors, 'password')}
          <input name="passwordConfirmation" placeholder="Password Confirm" />
          ${getError(errors, 'passwordConfirmation')}
          <button>Register</button>
        </form>
      </div>
    `
  })
}