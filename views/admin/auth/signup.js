const layout = require('../layout')

const getError = (errors, prop) => {
  try {
    return errors.mapped()[prop].msg
  } catch (err) {
    return ''
  }
}

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div>
        <h1>Ceapstow Wholesalers</h1>
        <hr />
        
        <hr />
        <h2>Register</h2>
        <form method="POST">
          <input
            name="name"
            placeholder="Name"
          />
          <input
            name="email"
            placeholder="Email"
          />
          <div style="color: red;">
            ${getError(errors, 'email')}
          </div> 
          <input
            name="password"
            placeholder="Password"
          />
          <div style="color: red;">
            ${getError(errors, 'password')}
          </div>
          <input
            name="passwordConfirmation"
            placeholder="Password Confirm"
          />
          <div style="color: red;">
            ${getError(errors, 'passwordConfirmation')}
          </div>
          <button>Register</button>
        </form>
      </div>
    `
  })
}

{/* <h4>Your ID is ${req.session.userId}</h4> */}