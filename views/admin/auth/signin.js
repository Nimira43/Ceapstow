const layout = require('../layout')

const getError = (errors, prop) => {
  try {
    return errors.mapped()[prop].msg
  } catch (err) {
    return ''
  }
}

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div>
        <h1>Ceapstow Wholesalers</h1>
        <hr />
        <h2>Login</h2>
        <form method="POST">
          <input 
            name="email" 
            placeholder="Email" 
          />
          ${getError(errors, 'email')}
          <input 
            name="password" 
            placeholder="Password" 
          />
          ${getError(errors, 'password')}
          <button>Login</button>
        </form>
      </div>    
    `
  })
}